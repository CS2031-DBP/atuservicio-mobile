import { ServicePage } from "../interfaces/serviceEntity/ServicePage";
import { ServiceResponse } from "../interfaces/serviceEntity/ServiceResponse";
import Api from "./api";

export const getAllServices = async (
  page: number,
  size: number,
  token: string | null
): Promise<ServicePage<ServiceResponse>> => {
  const api = await Api.getInstance();

  try {
    const response = await api.get<void, ServicePage<ServiceResponse>>({
      url: "/service",
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};  