import React from 'react';
import {Container} from './styles';
import { Input } from '../../components/Input';
import { FaUser, FaLock } from 'react-icons/fa';


function SignIn() {
  return (
    <Container>
     <h1>Bem Vindo de volta!</h1>
     <p>Bem vindo de volta! Por favor preencha seus dados.</p>
     <p>E-mail</p>
     <Input
            type="email"
            placeholder="Preencha seu e-mail"
            icon={FaUser}
          />
     <p>Senha</p>
     <Input
            type="password"
            placeholder="*******"
            icon={FaLock}
          />
          <button>Entrar</button>
          <button>Entre com o Google</button>
          <p>Não tem uma conta? Crie aqui</p>
    </Container>
  );
}

export default SignIn;