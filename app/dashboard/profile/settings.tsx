import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function settings() {
  return (
    <View>
      <Text>settings</Text>
      <Button title="Volver al Login" onPress={() => router.back()} />
    </View>
  )
}