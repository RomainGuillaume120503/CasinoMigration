import axios from 'axios';
import TokenService from '@/services/token.service';
import router from '@/routers';

const api = axios.create({
  baseURL: 'http://localhost:5084/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      TokenService.removeToken();
      router.push({ name: 'Login' });
    }

    if (status === 403) {
      router.push({ name: 'Forbidden' }); // Ta page d'erreur 403
    }

    return Promise.reject(error);
  }
);

export default api;