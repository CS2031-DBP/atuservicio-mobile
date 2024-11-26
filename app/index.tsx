import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}