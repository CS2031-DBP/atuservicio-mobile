import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterIndex() {
  const router = useRouter();

  return (
    <View>
      <Text>Regístrate como:</Text>
      <Button title="Cliente" onPress={() => router.push('client')} />
      <Button title="Proveedor" onPress={() => router.push('provider/freelancer')} />
    </View>
  );
}
