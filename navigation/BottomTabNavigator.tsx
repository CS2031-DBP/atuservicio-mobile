import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

// Importa tus pantallas
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../app/dashboard/profile';

// Configura las tabs
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Oculta el header superior
          tabBarStyle: { backgroundColor: '#6200EE' }, // Estilo del navbar
          tabBarActiveTintColor: '#fff', // Color del ícono activo
          tabBarInactiveTintColor: '#ccc', // Color del ícono inactivo
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: () => <Text>🏠</Text>, // Reemplaza con íconos más profesionales
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Text>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}