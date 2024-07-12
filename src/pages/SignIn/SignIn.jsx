import React from 'react';
import {Container,Buttons,Rightside,Content,Title,InputTitle,Entrar,Linha,Span} from './styles';
import { Input } from '../../components/Input';
import { FaUser, FaLock } from 'react-icons/fa';
import ImgRight from '../../assets/img/rightside.svg';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <Container>
      <ToastContainer/>
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
                    <Entrar onClick={handleSubmit}>Entrar</Entrar>
                    <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                            console.log(credentialResponseDecoded);
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                          style={{
                            height: '41px',
                            width: '313px',
                          }}                    
                    />
                </Buttons>
                <Link to="/register" style={{ textDecoration: 'none', color:'white'}}>Não tem uma conta?<Span>  Crie sua conta aqui</Span></Link>
                    
        </Content>
        <Rightside src={ImgRight} alt="Imagem da direita" />
      </Container>
  );
}

export default SignIn;