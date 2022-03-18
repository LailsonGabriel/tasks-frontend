import { useState } from 'react';
import InputHandler from '../../utils/InputHandler';
import { register as registerAuth } from '../../services/auth';
import { Link } from 'react-router-dom';
import saveLocalStorage from '../../utils/saveLocalStorage';
import { Form } from 'react-bootstrap';

function RegisterPage() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = (e) => {
    InputHandler(e, register, setRegister);
  };

  const submitRegister = async (e) => {
    const { name, email, password } = register;
    const infos = await registerAuth(name, email, password);
    saveLocalStorage('userInfos', infos);
    window.location.reload();
  };

  return (
    <div className='d-flex justify-content-md-center flex-column align-items-center mt-4'>
      <h1>Register</h1>
      <div className='d-flex flex-column'>
        <Form.Control
          name='name'
          type='text'
          value={register.name}
          placeholder='Nome'
          onChange={handleRegister}
        />
        <Form.Control
          name='email'
          type='text'
          placeholder='Email'
          value={register.email}
          onChange={handleRegister}
        />
        <Form.Control
          name='password'
          type='text'
          placeholder='Senha'
          value={register.password}
          onChange={handleRegister}
        />
      </div>
      <div>
        <Link to='/login'>Voltar para o Login</Link>
      </div>
      <div>
        <button type='button' onClick={submitRegister}>
          Registrar
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
