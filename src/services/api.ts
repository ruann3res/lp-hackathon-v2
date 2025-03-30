/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar dados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao enviar dados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }
}

export const api = new ApiService(import.meta.env.VITE_API_URL);

interface SendMessageType {
  numero: string;
  text: TextType;
}

interface TextType {
  message: string;
} 

export interface UserRegisterType {
  name: string;
  telefone: string;
  details: {
    additionalProp1: {
      plano: string;
      endereco: string;
      nomePropriedade: string;
      areaTotal: string;
      areaCultivada: string;
      tipoSolo: string;
      cultura: string;
      persona: string;
    }
  }
}

export const userService = {
  sendUserForm: (userForm: UserRegisterType) => api.post<UserRegisterType>('/user', userForm),
  sendChatMessage: (messageBody: SendMessageType) => api.post<string>('/enviar', messageBody),
};

