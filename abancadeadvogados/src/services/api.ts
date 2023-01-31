import axios, { AxiosError } from 'axios';
import Notiflix from 'notiflix';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<{ message?: string }>) => {
    if (
      error.response?.status === 401 ||
      error.response?.data?.message === 'Expired token'
    ) {
      Notiflix.Notify.info('Sessão Expirada...');
      // localStorage.removeItem('@FG-Acelera-user');
      // localStorage.removeItem('@FG-Acelera-JWT');
    }
    return Promise.reject(error);
  },
);


export default api;