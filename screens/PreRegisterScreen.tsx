import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function PreRegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a ATUservicio</Text>
      <Text style={styles.subtitle}>Iniciar como</Text>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('ProviderLogin')}
      >
        Proveedor
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('ClienteLogin')}
      >
        Cliente
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
});
