import { useState } from 'react';
import InputReusable from '../../Components/Input/Index';
import InputHandler from '../../utils/InputHandler';
import { register as registerAuth } from '../../services/auth';
import { Link } from 'react-router-dom';

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
    await registerAuth(name, email, password);
    window.location.reload();
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <InputReusable
          name='name'
          type='text'
          value={register.name}
          onChange={handleRegister}
        />
        <InputReusable
          name='email'
          type='text'
          value={register.email}
          onChange={handleRegister}
        />
        <InputReusable
          name='password'
          type='text'
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
