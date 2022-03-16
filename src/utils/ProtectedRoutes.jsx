import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router';

const token = Cookies.get('session');

const ProtectedRoutes = () => {
  return token ? <Outlet /> : <Navigate to='/login' />;
};

const ProtectedLogin = () => {
  return !token ? <Outlet /> : <Navigate to='/' />;
};

export { ProtectedRoutes, ProtectedLogin };
