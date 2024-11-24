import { AuthResponse } from "../interfaces/AuthResponse";
import { LoginUser } from "../interfaces/LoginUser";
import { RegisterClient, RegisterEnterprise, RegisterFreelancer } from "../interfaces/Register";
import Api from "./api";


export const loginService = async (credentials: LoginUser): Promise<{ token: string }> => {
  try {
    const api = await Api.getInstance();
    
    console.log("Datos enviados al backend:", credentials); // Muestra los datos enviados al backend
    
    const response = await api.post<LoginUser, string>(
      credentials,
      { url: "/auth/login" }
    );
    
    console.log("Respuesta del backend:", response.data); // Muestra la respuesta del backend
    return { token: response.data }; // Ajusta para devolver un objeto con el token
  } catch (error: any) {
    if (error.response) {
      console.error("Error en la respuesta del backend:", error.response.data);
      console.error("Código de estado:", error.response.status);
      throw new Error(
        error.response.data?.message || "Error al iniciar sesión. Verifica tus credenciales."
      );
    } else if (error.request) {
      console.error("No se pudo conectar con el backend. Detalles de la solicitud:", error.request);
      throw new Error("No se pudo conectar con el servidor. Verifica tu conexión a internet.");
    } else {
      console.error("Error inesperado al iniciar sesión:", error.message);
      throw new Error("Error inesperado. Intenta nuevamente.");
    }
  }
};

export const registerClientService = async (data: RegisterClient): Promise<void> => {
  try {
    const api = await Api.getInstance();
    await api.post<RegisterClient, void>(data, { url: "/auth/register/client" }); // Endpoint del backend
    console.log("Registro de cliente exitoso"); // Confirmación en la consola
  } catch (error: any) {
    handleServiceError(error, "cliente");
  }
};

export const registerFreelancerService = async (data: RegisterFreelancer): Promise<void> => {
  try {
    const api = await Api.getInstance();
    await api.post<RegisterFreelancer, void>(data, { url: "/auth/register/freelancer" });
    console.log("Registro de freelancer exitoso");
  } catch (error: any) {
    handleServiceError(error, "freelancer");
  }
};

export const registerEnterpriseService = async (data: RegisterEnterprise): Promise<void> => {
  try {
    const api = await Api.getInstance();
    await api.post<RegisterEnterprise, void>(data, { url: "/auth/register/enterprise" });
    console.log("Registro de empresa exitoso");
  } catch (error: any) {
    handleServiceError(error, "empresa");
  }
};

const handleServiceError = (error: any, type: string): void => {
  // Verifica si el error tiene una respuesta del backend
  if (error.response) {
    console.error(`Error en el registro del ${type}:`, error.response.data); // Datos del error
    console.error(`Status Code: ${error.response.status}`); // Código de estado
    throw new Error(
      error.response.data?.message || `Error en el registro del ${type}. Verifica los datos enviados.`
    );
  } else if (error.request) {
    // La solicitud fue hecha pero no se recibió respuesta
    console.error(`No se recibió respuesta del backend para el registro del ${type}`);
    console.error(error.request); // Detalles de la solicitud
    throw new Error(
      `No se pudo conectar con el servidor para registrar el ${type}. Verifica tu conexión o el estado del backend.`
    );
  } else {
    // Algo más ocurrió al configurar la solicitud
    console.error(`Error al configurar la solicitud para registrar el ${type}:`, error.message);
    throw new Error(`Error inesperado al registrar el ${type}.`);
  }
};