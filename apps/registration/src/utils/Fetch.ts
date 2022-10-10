import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fetch = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
  withCredentials: true
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.status === 401) {
      const navigate = useNavigate();
      navigate('/');
    }
    return Promise.reject(error);
  },
);

export { fetch };
