import { View, Text, Image} from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Button } from 'react-native-paper'
import LoginScreen from '../../components/LoginForm'
import { StyleSheet } from 'react-native';
import { LoginUser } from '../../interfaces/LoginUser'
import LoginForm from '../../components/LoginForm'



export default function Login(credentials: LoginUser) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../.././assets/icon.png')} 
        className="w-40 h-40 object-contain"
      />
      
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Formulario de Inicio de Sesión */}
      <View style={styles.formContainer}>
        <LoginForm />
      </View>

      {/* Enlace para Registrarse */}
      <Link href="/auth/register" style={styles.link}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Registrarme</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Fondo gris claro
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20, // Separación del enlace
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#2563eb',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});