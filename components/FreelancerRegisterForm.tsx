import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { RegisterFreelancer } from '../interfaces/Register';
import { registerFreelancerService } from '../services/authService';

export default function FreelancerRegisterScreen() {
  // Estado inicial del formulario basado en la interfaz RegisterFreelancer
  
  const [formData, setFormData] = useState<RegisterFreelancer>({
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    firstName: '',
    lastName: '',
    age: 0,
    dni: 0,
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (field: keyof RegisterFreelancer, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  // Función para manejar el envío del formulario
  const handleRegister = async () => {
    try {
      await registerFreelancerService(formData); // Llama al método del contexto
      console.log('Registro exitoso:', formData);
      alert('Freelancer registrado exitosamente.');
    } catch (error: any) {
      console.error('Error al registrar freelancer:', error.message);
      alert('Error al registrar freelancer. Intente nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Freelancer</Text>

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
      <TextInput
        label="Edad"
        value={formData.age.toString()}
        onChangeText={(value) => handleInputChange('age', parseInt(value) || 0)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="DNI"
        value={formData.dni.toString()}
        onChangeText={(value) => handleInputChange('dni', parseInt(value) || 0)}
        keyboardType="numeric"
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

