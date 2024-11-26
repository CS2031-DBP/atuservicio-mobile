import { useState } from "react";
import { UserProfileUpdate } from "../interfaces/UserProfileUpdate";
import { updateProfile } from "../services/profileService";
import { Alert, Button, TextInput, View } from "react-native";

export default function EditProfile() {
    const [formData, setFormData] = useState<UserProfileUpdate>({
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const handleInputChange = (field: keyof UserProfileUpdate, value: string) => {
      setFormData({ ...formData, [field]: value });
    };
  
    const handleSubmit = async () => {
      try {
        await updateProfile(formData); // Llama al servicio para actualizar el perfil
        Alert.alert("Éxito", "El perfil se actualizó correctamente.");

        
      } catch (error: any) {
        Alert.alert("Error", error.message || "Hubo un problema al actualizar el perfil.");
      }
    };
  
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
        <Button title="Actualizar Perfil" onPress={handleSubmit} />
      </View>
    );
  }