import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProfile } from '../services/profileService';
import { UserProfile } from '../interfaces/UserProfile';

export default function Profile() {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await getProfile(); // Llama al método para obtener el perfil
          setUserData(response); // Guarda los datos del usuario
        } catch (error) {
          console.error("Error al obtener el perfil:", error);
        } finally {
          setLoading(false); // Finaliza la carga
        }
      };
  
      fetchProfile();
    }, []);
  
    if (loading) {
      return (
        <View >
          <Text >Cargando perfil...</Text>
        </View>
      );
    }
  
    if (!userData) {
      return (
        <View >
          <Text>No se pudo cargar el perfil.</Text>
        </View>
      );
    }
  
    return (
        <View >
        <Text >Nombre: {userData.firstName} {userData.lastName}</Text>
        <Text >Correo: {userData.email}</Text>
        <Text >Teléfono: {userData.phoneNumber}</Text>
        <Text >Dirección: {userData.address}</Text>
      </View>
    );
  }