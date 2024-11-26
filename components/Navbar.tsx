import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function Navbar() {
    const router = useRouter();
  
    return (
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push('/dashboard/')} style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/dashboard/buscar')} style={styles.navItem}>
          <Text style={styles.navText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/dashboard/arrangements')} style={styles.navItem}>
          <Text style={styles.navText}>Arrangements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/dashboard/profile')} style={styles.navItem}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      backgroundColor: '#6200ee',
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
    },
    navText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });