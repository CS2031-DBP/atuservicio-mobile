import { View, StyleSheet } from 'react-native';
import { Slot, Stack, useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';



export default function DashboardLayout() {
  return (
    <View style={{ flex: 1 }}>


      <Slot /> {/* Renderiza automáticamente las rutas hijas */}
        
      <Navbar/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
