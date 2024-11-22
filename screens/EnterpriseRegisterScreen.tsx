import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { RegisterEnterprise } from '../interfaces/Register';

export default function EnterpriseRegisterScreen() {
  // Estado inicial del formulario basado en la interfaz RegisterEnterprise
  const [formData, setFormData] = useState<RegisterEnterprise>({
    email: '',
    password: '',
    phoneNumber: '',
    ruc: '',
    name: '',
    businessSector: '',
    size: '',
    address: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (field: keyof RegisterEnterprise, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Función para manejar el envío del formulario
  const handleRegister = () => {
    console.log('Datos enviados:', formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Empresa</Text>

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
        label="RUC"
        value={formData.ruc}
        onChangeText={(value) => handleInputChange('ruc', value)}
        style={styles.input}
      />
      <TextInput
        label="Nombre de la Empresa"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
        style={styles.input}
      />
      <TextInput
        label="Sector Empresarial"
        value={formData.businessSector}
        onChangeText={(value) => handleInputChange('businessSector', value)}
        style={styles.input}
      />
      <TextInput
        label="Tamaño"
        value={formData.size}
        onChangeText={(value) => handleInputChange('size', value)}
        style={styles.input}
      />
      <TextInput
        label="Dirección"
        value={formData.address}
        onChangeText={(value) => handleInputChange('address', value)}
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