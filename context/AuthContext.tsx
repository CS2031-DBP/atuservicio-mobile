import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { LoginUser } from '../interfaces/LoginUser';
import { RegisterClient, RegisterEnterprise, RegisterFreelancer } from '../interfaces/Register';
import { loginService, registerClientService, registerEnterpriseService, registerFreelancerService } from '../services/authService';
import { View, Text } from 'react-native'


interface AuthContextType {
    isLoading:boolean;
    isAuthenticated: boolean;
    token: string | null;
    login: (credentials: LoginUser) => Promise<void>; // Ahora login acepta un objeto LoginUser
    logout: () => Promise<void>;
    registerClient: (data: RegisterClient) => Promise<void>; // Registro de cliente
  registerFreelancer: (data: RegisterFreelancer) => Promise<void>; // Registro de freelancer
  registerEnterprise: (data: RegisterEnterprise) => Promise<void>;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar el token desde SecureStore al iniciar la app
  useEffect(() => {
    let isMounted = true; // Bandera para verificar si el componente está montado
    
    const loadToken = async () => {
      try {
        console.log('Intentando cargar el token...');
        const storedToken = await SecureStore.getItemAsync('authToken');
        if (isMounted) {
          if (storedToken) {
            console.log('Token encontrado:', storedToken);
            setToken(storedToken);
            setIsAuthenticated(true);
          }
          setIsLoading(false); // La carga ha finalizado
        }
      } catch (error) {
        console.error('Error al cargar el token:', error);
        if (isMounted) setIsLoading(false); // Asegúrate de finalizar el estado de carga
      }
    };
  
    loadToken();
  
    return () => {
      isMounted = false; // Marca el componente como desmontado
    };
  }, []);

  const login = async (credentials: LoginUser) => {
    try {
      const { token } = await loginService(credentials); // Pasa el objeto LoginUser al servicio
      await SecureStore.setItemAsync("authToken", token); // Guarda el token
      setToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error("Credenciales inválidas. Verifica tu correo y contraseña.");
    }
  };
  const registerClient = async (data: RegisterClient) => {
    try {
      await registerClientService(data);
    } catch (error) {
      throw new Error("Error al registrar al cliente.");
    }
  };

  const registerFreelancer = async (data: RegisterFreelancer) => {
    try {
      await registerFreelancerService(data);
    } catch (error) {
      throw new Error("Error al registrar al freelancer.");
    }
  };

  const registerEnterprise = async (data: RegisterEnterprise) => {
    try {
      await registerEnterpriseService(data);
    } catch (error) {
      throw new Error("Error al registrar a la empresa.");
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('authToken');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        login,
        logout,
        registerClient,
        registerFreelancer,
        registerEnterprise,
      }}
    >
      {isLoading ? (
    <Text>Cargando...</Text>
  ) : (
    React.isValidElement(children) ? (
      children
    ) : (
      <Text>Contenido no válido</Text>
    )
  )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};