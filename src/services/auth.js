import Cookies from 'js-cookie';
import api from './api';
const tokenCookie = Cookies.get('session');

const login = async (email, password) => {
  try {
    const {
      data: { token, name: userName, id, email: userEmail },
    } = await api.post('/user/login', { email, password });
    Cookies.set('session', token, { expires: 7 });
    api.defaults.headers.common['Authorization'] = `${token}`;
    return { userName, id, userEmail };
  } catch (err) {
    return { err };
  }
};

const logout = async () => {
  try {
    Cookies.remove('session');
    window.location.replace('/login');
  } catch (error) {
    throw error;
  }
};

if (tokenCookie) {
  api.defaults.headers.common['Authorization'] = `${tokenCookie}`;
}

const register = async (name, email, password) => {
  try {
    const {
      data: { token, name: userName, id, email: userEmail },
    } = await api.post('/user/register', { name, email, password });
    Cookies.set('session', token, { expires: 7 });
    api.defaults.headers.common['Authorization'] = `${token}`;
    return { userName, id, userEmail };
  } catch (err) {
    return { err };
  }
};

export { login, logout, register };
