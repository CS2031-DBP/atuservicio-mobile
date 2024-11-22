import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import PreRegisterScreen from '../screens/PreRegisterScreen';
import EnterpriseRegisterScreen from '../screens/EnterpriseRegisterScreen';
import FreelancerRegisterScreen from '../screens/FreelancerRegisterScreen';
import ClientRegisterScreen from '../screens/ClientRegisterScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterClient" component={ClientRegisterScreen} />
        <Stack.Screen name="RegisterFreelancer" component={FreelancerRegisterScreen} />
        <Stack.Screen name="RegisterEnterprise" component={EnterpriseRegisterScreen} />
        <Stack.Screen name="PreRegisterScreen" component={PreRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}