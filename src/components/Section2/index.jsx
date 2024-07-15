import React from 'react';
import { Content, Container, OrangeTitle,Titulo,Texto} from './styles'; // Import styled components
import Header from '../../components/Header/App';
import OrangeButton from '../../components/OrangeButton/App';


function Section2() {

  return (
    <Container>
      <Header />
      <Content>
        <Titulo>
          <OrangeTitle>Tenha </OrangeTitle> 
          Uma visão 360 da sua Academia
          </Titulo>
          <Texto>
          Elevamos sua jornada fitness com nosso sistema abrangente de gerenciamento de academia. Registre membros sem esforço, rastreie pagamentos de forma impecável, personalize planos de treino, atribua treinadores pessoais e muito mais.
          </Texto>
          <OrangeButton buttonText="Assine já"/>
      </Content>
    </Container>
  );
}

export default Section2;
