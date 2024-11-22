import React from 'react';
import { Stack } from 'expo-router';

export default function RegisterLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Elige el tipo de registro' }} />
      <Stack.Screen name="provider/freelancer" options={{ title: 'Registro Freelancer' }} />
      <Stack.Screen name="provider/enterprise" options={{ title: 'Registro Empresa' }} />
      <Stack.Screen name="client" options={{ title: 'Registro Cliente' }} />
    </Stack>
  );
}
