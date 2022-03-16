import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/Index';
import LoginPage from './Pages/Login/Index';
import { ProtectedRoutes, ProtectedLogin } from './utils/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      <Route element={<ProtectedLogin />}>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
