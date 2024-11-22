import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../../../context/AuthContext";


export default function ClientRegisterScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    firstName: "",
    lastName: "",
  });

  const { registerClient } = useAuth();

  const handleRegister = async () => {
    try {
      await registerClient(formData); // Llama al método registerClient del contexto
      alert("Cliente registrado exitosamente");
    } catch (error) {
      alert("Error al registrar al cliente. Intenta de nuevo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Cliente</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Número de teléfono"
        value={formData.phoneNumber}
        onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Dirección"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre"
        value={formData.firstName}
        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido"
        value={formData.lastName}
        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        style={styles.input}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
});
