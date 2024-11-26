import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { Slot, Stack, useRouter } from 'expo-router';
import "../global.css";



export default function Layout() {
  return (
    <AuthProvider>

      <RootNavigator />
    </AuthProvider>
  );
}

export function RootNavigator(){
  const { isAuthenticated } = useAuth();
  const router = useRouter();


  useEffect(() => {
      if (isAuthenticated) {
        router.replace('/dashboard/'); // Redirige a la sección autenticada
      } else {
        router.replace('/auth/login'); // Redirige a la sección no autenticada
      }
    }, [isAuthenticated]);
  
    return <Stack
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: '#6200ee' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >

  </Stack>
  
}