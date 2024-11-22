import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { LoginUser } from '../interfaces/LoginUser';

export default function LoginScreen() {
  // Estado inicial del formulario basado en la interfaz LoginUser
  const [formData, setFormData] = useState<LoginUser>({
    email: '',
    password: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (field: keyof LoginUser, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    console.log('Intento de inicio de sesión:', formData);
    // Aquí podrías conectar con tu backend para autenticar al usuario
    // api.post('/login', formData)
    //   .then(response => console.log('Login exitoso:', response.data))
    //   .catch(error => console.error('Error en login:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
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