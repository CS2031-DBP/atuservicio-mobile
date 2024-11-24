import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
      <Stack.Screen name="register" options={{ title: 'Registro' }} />
    </Stack>
  );
}