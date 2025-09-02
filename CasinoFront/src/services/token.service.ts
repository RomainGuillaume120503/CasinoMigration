const TOKEN_KEY = 'jwt_token';

export default {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
};