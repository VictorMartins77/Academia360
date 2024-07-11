import React from 'react';
import {Container,Buttons,Rightside,Content,Title,InputTitle,Entrar,Linha,Span,Link} from './styles';
import { Input } from '../../components/Input';
import { FaUser, FaLock} from 'react-icons/fa';
import { CgGym } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import ImgRight from '../../assets/img/rightside.svg';
import GoogleButton from 'react-google-button'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../../services/firebaseConfig';
import { useState } from "react";
import { setDoc,doc} from 'firebase/firestore';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [name, setName] = useState('');
  const [gymName, setGymName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password validation:
    if (password !== confirmPassword) {
      toast.error('As senhas não conferem.');
      return; // Prevent further processing if passwords don't match
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          gymName: gymName,
          name: name,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("Conta criada com sucesso", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <Container>
      <ToastContainer
      position="top-center"/>
      <Content>
        <Title>Crie sua conta aqui.</Title>
        <InputTitle>Nome</InputTitle>
        <Input
          type="text"
          placeholder="Nome completo"
          icon={FaUser}
          onChange={(e) => setName(e.target.value)}
        />
        <InputTitle>Nome da academia</InputTitle>
        <Input
          type="text"
          placeholder="Nome da academia"
          icon={CgGym}
          onChange={(e) => setGymName(e.target.value)}
        />
        <InputTitle>E-mail</InputTitle>
        <Input
          type="email"
          placeholder="E-mail"
          icon={MdEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputTitle>Senha</InputTitle>
        <Input
          type="password"
          placeholder="*******"
          icon={FaLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputTitle>Confirmar senha</InputTitle>
        <Input
          type="password"
          placeholder="*******"
          icon={FaLock}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Buttons>
          <Entrar onClick={handleSignUp}>Criar</Entrar>
          <GoogleButton
            type="light"
            onClick={() => {
              console.log('Google button clicked');
            }}
            style={{ width: '313px' }} // Adjust values as needed
          />
        </Buttons>
      </Content>
      <Rightside src={ImgRight} alt="Imagem da direita" />
    </Container>
  );
}

export default SignUp;