import { View, StyleSheet } from 'react-native';
import { Slot, Stack } from 'expo-router';
import Navbar from '../../components/Navbar';


export default function DashboardLayout() {
  return (
    <View style={styles.container}>
      {/* Renderiza el contenido principal */}
      <View style={styles.content}>
        <Slot /> {/* Renderiza las pantallas como home, profile, etc. */}
      </View>

      {/* Navbar fijo en la parte inferior */}
      <Navbar />
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
