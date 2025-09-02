import AuthAPI from '@/api/AuthApi';


export function useApi() {
  return {
    auth: AuthAPI as typeof AuthAPI,
  };
}