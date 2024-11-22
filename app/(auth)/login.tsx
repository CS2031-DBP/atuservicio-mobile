import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { LoginUser } from '../../interfaces/LoginUser';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useAuth();
  
    const handleLogin = async () => {
      try {
        const credentials: LoginUser = { email, password }; // Construye el objeto LoginUser
        await login(credentials); // Llama al contexto con el objeto LoginUser
        router.replace("/home"); // Redirige al home después de login exitoso
      } catch (error: any) {
        alert(error.message); // Maneja errores
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Ingresar" onPress={handleLogin} />
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