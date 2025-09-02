import api from "./BaseApi";
import TokenService from "@/services/token.service";
import { LoginPayload } from "@/models/Core/LoginPlayload";
import { AuthResponse } from "@/models/Core/AuthResponse";

export default class AuthAPI {
  static async login(payload: LoginPayload): Promise<AuthResponse> {
    const baseURL = "Auth";
    console.log("appel api");
    const response = await api.post<{ token: string }>(
      `${baseURL}/login`,
      payload
    );
    const authResponse = new AuthResponse(response.data.token);

    TokenService.saveToken(authResponse.token);
    return authResponse;
  }

  static logout(): void {
    TokenService.removeToken();
  }
}