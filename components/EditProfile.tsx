import { useEffect, useState } from "react";
import { UserProfileUpdate } from "../interfaces/UserProfileUpdate";
import { getProfile, updateProfile } from "../services/profileService";
import { ActivityIndicator, Alert, Button, TextInput, View } from "react-native";


export default function EditProfile() {
  const [formData, setFormData] = useState<UserProfileUpdate>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [loading, setLoading] = useState(true); // Estado para manejar la carga inicial
  const [updating, setUpdating] = useState(false); // Estado para manejar la actualización

  // Precargar los datos del perfil
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile(); // Llama al servicio para obtener el perfil
        console.log("Datos del perfil obtenidos:", profileData); // Verifica los datos obtenidos
        setFormData({
          firstName: profileData.firstName || "",
          lastName: profileData.lastName || "",
          address: profileData.address || "",
          phoneNumber: profileData.phoneNumber || "",
          email: profileData.email || "",
        }); // Precarga los datos en el formulario
      } catch (error: any) {
        Alert.alert("Error", error.message || "No se pudieron cargar los datos del perfil.");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (field: keyof UserProfileUpdate, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    setUpdating(true); // Activa el estado de actualización
    try {
      await updateProfile(formData); // Llama al servicio para actualizar el perfil
      Alert.alert("Éxito", "El perfil se actualizó correctamente.");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Hubo un problema al actualizar el perfil.");
    } finally {
      setUpdating(false); // Finaliza el estado de actualización
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#6200ee" /> {/* Indicador de carga */}
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <TextInput
        placeholder="Nombre"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <TextInput
        placeholder="Apellido"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <TextInput
        placeholder="Dirección"
        value={formData.address}
        onChangeText={(value) => handleInputChange("address", value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <TextInput
        placeholder="Teléfono"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        keyboardType="phone-pad"
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
        className="border border-gray-300 rounded-md p-2 mb-4"
      />
      <Button
        title={updating ? "Actualizando..." : "Actualizar Perfil"}
        onPress={handleSubmit}
        disabled={updating} // Deshabilita el botón mientras se está actualizando
      />
    </View>
  );
}
