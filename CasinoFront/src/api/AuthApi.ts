import api from "./BaseApi";
import TokenService from "@/services/token.service";
import type { RegisterPayload } from "@/models/RegisterPayload";

export default class AuthAPI {
  static async register(payload: RegisterPayload): Promise<void> {
    const baseURL = "Auth";
    await api.post(`${baseURL}/register`, payload);
  }

  static logout(): void {
    TokenService.removeToken();
  }
}