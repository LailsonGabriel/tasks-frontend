import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/Index';
import LoginPage from './Pages/Login/Index';
import RegisterPage from './Pages/Register/Index';
import { ProtectedRoutes, ProtectedLogin } from './utils/ProtectedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      <Route element={<ProtectedLogin />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
