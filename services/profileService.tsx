import Api from "./api";


import { UserProfile } from "../interfaces/UserProfile"; // Asegúrate de colocar esta interfaz en el lugar correcto
import { UserProfileUpdate } from "../interfaces/UserProfileUpdate";

export async function getProfile(): Promise<UserProfile> {
  try {
    const api = await Api.getInstance();
    const response = await api.get<void, UserProfile>({ url: "/profile" }); // Usa la interfaz UserProfile como el tipo de respuesta
    return response.data; // Devuelve los datos del perfil
  } catch (error: any) {
    console.error("Error al obtener el perfil:", error.message);
    throw new Error("No se pudo obtener el perfil del usuario.");
  }
}

export async function updateProfile(data: UserProfileUpdate): Promise<void> {
    try {
      const api = await Api.getInstance();
      await api.patch<UserProfileUpdate, void>(data, { url: "/profile" }); // Realiza la solicitud PATCH
      console.log("Perfil actualizado con éxito.");
    } catch (error: any) {
      console.error("Error al actualizar el perfil:", error.message);
      throw new Error("No se pudo actualizar el perfil.");
    }
  }