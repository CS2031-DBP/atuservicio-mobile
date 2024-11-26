import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';
import Profile from '../../../components/Profile';


export default function Index() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  return (

    
    <View className="flex-1 bg-white justify-center">
      <Profile/>
      <View className="flex items-end pr-4">
        <View className="w-32 mb-3">
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
        <View className="w-32 mb-3">
          <Button
            title="Setting"
            onPress={() => router.push("/dashboard/profile/settings")}
          />
        </View>
        <View className="w-32 mb-3">
          <Button title="Editar Perfil" 
          onPress={() => router.push("/dashboard/profile/edit")} />
        </View>
      </View>
    </View>
  );
}
