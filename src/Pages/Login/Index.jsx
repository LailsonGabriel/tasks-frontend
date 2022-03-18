import InputHandler from '../../utils/InputHandler';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login as loginAuth } from '../../services/auth';
import saveLocalStorage from '../../utils/saveLocalStorage';
import { Form } from 'react-bootstrap';

function LoginPage() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    InputHandler(e, login, setLogin);
  };

  const submitLogin = async () => {
    const { email, password } = login;
    const infos = await loginAuth(email, password);
    saveLocalStorage('userInfos', infos);
    window.location.reload();
  };

  return (
    <div className='d-flex justify-content-md-center flex-column align-items-center mt-4'>
      <h1>Login</h1>
      <div fluid='auto'>
        <Form.Control
          type='text'
          name='email'
          value={login.email}
          placeholder='Email'
          onChange={handleLogin}
        />
        <Form.Control
          type='password'
          name='password'
          placeholder='Senha'
          value={login.password}
          onChange={handleLogin}
        />
      </div>
      <div>
        <Link to='/register'>Clique aqui para cadastro</Link>
      </div>
      <button type='button' onClick={submitLogin}>
        Logar
      </button>
    </div>
  );
}

export default LoginPage;
