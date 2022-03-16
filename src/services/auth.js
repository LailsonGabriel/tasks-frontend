import Cookies from 'js-cookie';
import api from './api';

const login = async (email, password) => {
  try {
    const {
      data: { token },
    } = await api.post('/user/login', { email, password });
    Cookies.set('session', token, { expires: 7 });
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (err) {
    return { err };
  }
};

export { login };
