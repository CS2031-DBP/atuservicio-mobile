
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { RegisterClient } from '../interfaces/Register';
import { registerClientService } from '../services/authService';

 // Asegúrate de ajustar la ruta a donde tengas definida la interfaz

export default function ClientRegisterScreen() {
  // Estado inicial del formulario basado en la interfaz RegisterClient
  const [formData, setFormData] = useState<RegisterClient>({
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    firstName: '',
    lastName: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (field: keyof RegisterClient, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Función para manejar el envío del formulario
  const handleRegister = async () => {
    try {
      // Llama al servicio para registrar al cliente
      await registerClientService(formData);
      console.log('Registro exitoso:', formData);
      alert('Registro exitoso'); // Notificación al usuario
    } catch (error: any) {
      console.error('Error al registrar:', error.message);
      alert('Ocurrió un error durante el registro. Inténtalo nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Cliente</Text>
      
      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange('phoneNumber', value)}
        style={styles.input}
      />
      <TextInput
        label="Dirección"
        value={formData.address}
        onChangeText={(value) => handleInputChange('address', value)}
        style={styles.input}
      />
      <TextInput
        label="Nombre"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
        style={styles.input}
      />
      <TextInput
        label="Apellido"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Registrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

