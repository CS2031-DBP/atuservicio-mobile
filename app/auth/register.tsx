

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ClientRegisterForm from '../../components/ClientRegisterForm';
import EnterpriseRegisterForm from '../../components/EnterpriseRegisterForm';
import FreelancerRegisterForm from '../../components/FreelancerRegisterForm';


export default function Register() {
  const [step, setStep] = useState<'roleSelection' | 'client' | 'providerSelection' | 'enterprise' | 'freelancer'>('roleSelection');
  const handleBack = () => {
    switch (step) {
      case 'client':
        setStep('roleSelection');
        break;
      case 'providerSelection':
        setStep('roleSelection');
        break;
      case 'enterprise':
        setStep('providerSelection');
        break;
      case 'freelancer':
        setStep('providerSelection');
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'roleSelection':
        return (
          <View style={styles.optionsContainer}>
            <Text style={styles.title}>Regístrate como:</Text>
            <Button title="Cliente" onPress={() => setStep('client')} />
            <Button title="Proveedor" onPress={() => setStep('providerSelection')} />
          </View>
        );
      case 'client':
        return <ClientRegisterForm />;
      case 'providerSelection':
        return (
          <View style={styles.optionsContainer}>
            <Text style={styles.title}>Selecciona el tipo de proveedor:</Text>
            <Button title="Empresa" onPress={() => setStep('enterprise')} />
            <Button title="Freelancer" onPress={() => setStep('freelancer')} />
          </View>
        );
      case 'enterprise':
        return <EnterpriseRegisterForm />;
      case 'freelancer':
        return <FreelancerRegisterForm />;
      default:
        return <Text>Error: Paso no definido</Text>;
        
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  optionsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});