import React from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { Stack, useRouter } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

function RootNavigator() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthenticated) {
      router.replace('(authenticated)/home'); // Redirige a la sección autenticada
    } else {
      router.replace('(auth)/login'); // Redirige a la sección no autenticada
    }
  }, [isAuthenticated]);

  return <Stack />;
}
