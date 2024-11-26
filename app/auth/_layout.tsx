
import React, { useEffect } from 'react';
import { useRouter, Slot, Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { View , Text} from 'react-native';



export default function AuthLayout() {
  return (
    <View className="flex-1 justify-center items-center">

      <Slot /> {/* Renderiza las rutas hijas automáticamente */}
    </View>
  );
}