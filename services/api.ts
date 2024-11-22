import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import * as SecureStore from "expo-secure-store"; // O puedes usar AsyncStorage si prefieres

export default class Api {
  private static _instance: Api | null = null;

  private _basePath: string;

  private _authorization: string | null;

  public set authorization(value: string | null) {
    this._authorization = value;
  }

  private constructor(basePath: string, authorization: string | null) {
    this._basePath = basePath;
    this._authorization = authorization;
  }

  public static async getInstance() {
    if (!this._instance) {
      const basePath = "http://192.168.1.40:8080";  // Cambia esto por tu endpoint
      const authorization = await SecureStore.getItemAsync("authToken"); // Obtén el token almacenado, si existe
      this._instance = new Api(basePath, authorization);
    }

    return this._instance;
  }

  private async getHeaders(): Promise<RawAxiosRequestHeaders> {
    const token = await SecureStore.getItemAsync("authToken"); // Token dinámico desde el almacenamiento
    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    };
  }

  public async request<RequestType, ResponseType>(config: AxiosRequestConfig) {
    const headers = await this.getHeaders();

    const configOptions: AxiosRequestConfig = {
      ...config,
      baseURL: this._basePath,
      headers: headers,
    };

    const path = this._basePath + config.url;

    return axios<RequestType, AxiosResponse<ResponseType>>(path, configOptions);
  }

  public get<RequestType, ResponseType>(config: AxiosRequestConfig) {
    const configOptions: AxiosRequestConfig = {
      ...config,
      method: "GET",
    };

    return this.request<RequestType, ResponseType>(configOptions);
  }

  public post<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "POST",
      data,
    };

    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }

  public delete(options: AxiosRequestConfig) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "DELETE",
    };

    return this.request<void, void>(configOptions);
  }

  public put<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "PUT",
      data: data,
    };

    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }

  public patch<RequestBodyType, ResponseBodyType>(
    data: RequestBodyType,
    options: AxiosRequestConfig
  ) {
    const configOptions: AxiosRequestConfig = {
      ...options,
      method: "PATCH",
      data: data,
    };

    return this.request<RequestBodyType, ResponseBodyType>(configOptions);
  }
}
