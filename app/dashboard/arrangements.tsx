import { View, Text, StyleSheet } from 'react-native';

export default function Arrangements() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Arrangements aquí!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
