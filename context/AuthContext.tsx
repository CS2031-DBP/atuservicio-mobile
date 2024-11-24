import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { LoginUser } from '../interfaces/LoginUser';
import { RegisterClient, RegisterEnterprise, RegisterFreelancer } from '../interfaces/Register';
import { loginService, registerClientService, registerEnterpriseService, registerFreelancerService } from '../services/authService';

interface AuthContextType {
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
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync('authToken');
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
      }
      setIsLoading(false); // Marcamos como completada la carga inicial
    };

    loadToken();
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
        token,
        login,
        logout,
        registerClient,
        registerFreelancer,
        registerEnterprise,
      }}
    >
      {!isLoading && <>{children}</>} {/* Solo renderiza el contenido cuando la carga inicial ha terminado */}
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