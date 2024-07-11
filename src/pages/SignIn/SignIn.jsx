import React from 'react';
import {Container,Buttons,Rightside,Content,Title,InputTitle,Entrar,Linha,Span} from './styles';
import { Input } from '../../components/Input';
import { FaUser, FaLock } from 'react-icons/fa';
import ImgRight from '../../assets/img/rightside.svg';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useState } from "react";


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  function handleSignIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }

  return (
    <Container>

      <Content>
          <Title>Bem Vindo de volta!</Title>
          <InputTitle>E-mail</InputTitle>
          <Input
                  type="email"
                  placeholder="Preencha seu e-mail"
                  icon={FaUser}
                  onChange={e=>setEmail(e.target.value)}
                />
          <InputTitle>Senha</InputTitle>
          <Input
                  type="password"
                  placeholder="*******"
                  icon={FaLock}
                  onChange={e=>setPassword(e.target.value)}
                />
                <Buttons>
                    <Entrar onClick={handleSignIn}>Entrar</Entrar>
                    <GoogleButton
                      type="light"
                      onClick={() => { console.log('Google button clicked') }}
                      style={{width: '313px' }} // Adjust values as needed
                    />
                </Buttons>
                <Link to="/register" style={{ textDecoration: 'none', color:'white'}}>Não tem uma conta?<Span>  Crie sua conta aqui</Span></Link>
                    
        </Content>
        <Rightside src={ImgRight} alt="Imagem da direita" />
      </Container>
  );
}

export default SignIn;