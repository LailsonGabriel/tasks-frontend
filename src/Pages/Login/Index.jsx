import InputReusable from '../../Components/Input/Index';
import InputHandler from '../../utils/InputHandler';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login as loginAuth } from '../../services/auth';

function LoginPage() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    InputHandler(e, login, setLogin);
  };

  const submitLogin = async () => {
    const { email, password } = login;
    await loginAuth(email, password);
    window.location.reload();
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <InputReusable
          type='text'
          name='email'
          value={login.email}
          onChange={handleLogin}
        />
        <InputReusable
          type='password'
          name='password'
          value={login.password}
          onChange={handleLogin}
        />
      </div>
      <div>
        <Link to='/register'></Link>
      </div>
      <button type='button' onClick={submitLogin}>
        Logar
      </button>
    </div>
  );
}

export default LoginPage;
