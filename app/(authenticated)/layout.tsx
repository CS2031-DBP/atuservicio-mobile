import React from 'react';
import { Stack } from 'expo-router';
import {Slot } from 'expo-router';

export default function AuthenticatedLayout() {
  return (


    <View>
      <Slot/>
    </View>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="home" options={{ title: 'Inicio' }} />
      <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
    </Stack>
  );
}
