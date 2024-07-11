import React from 'react';
import {Container,Buttons,Rightside,Content,Title,InputTitle,Entrar,Linha,Span,Link} from './styles';
import { Input } from '../../components/Input';
import { FaUser, FaLock } from 'react-icons/fa';
import ImgRight from '../../assets/img/rightside.svg';
import GoogleButton from 'react-google-button'

function SignIn() {
  return (
    <Container>

      <Content>
          <Title>Bem Vindo de volta!</Title>
          <InputTitle>E-mail</InputTitle>
          <Input
                  type="email"
                  placeholder="Preencha seu e-mail"
                  icon={FaUser}
                />
          <InputTitle>Senha</InputTitle>
          <Input
                  type="password"
                  placeholder="*******"
                  icon={FaLock}
                />
                <Buttons>
                    <Entrar>Entrar</Entrar>
                    <GoogleButton
                      type="light"
                      onClick={() => { console.log('Google button clicked') }}
                      style={{width: '313px' }} // Adjust values as needed
                    />
                </Buttons>
                    {/* <Linha>OU</Linha> */}
                    <Link>Não tem uma conta?<Span>  Crie sua conta aqui</Span></Link>
                    
        </Content>
        <Rightside src={ImgRight} alt="Imagem da direita" />
      </Container>
  );
}

export default SignIn;