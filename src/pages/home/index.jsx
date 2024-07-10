import React from 'react';
import { Content, Container, OrangeTitle,Titulo,Texto} from './styles'; // Import styled components
import Header from '../../components/Header/App';
import bannerImage from '../../assets/img/banner.svg';
import OrangeButton from '../../components/OrangeButton/App';


function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Titulo>
          <OrangeTitle>Tenha </OrangeTitle> 
          Uma visão 360 da sua Academia
          </Titulo>
          <Texto>
          <p>Maximize sua experiência na academia Elevamos sua jornada fitness com nosso sistema abrangente de gerenciamento de academia. Registre membros sem esforço, rastreie pagamentos de forma impecável, personalize planos de treino, monitore o progresso meticulosamente, atribua treinadores pessoais e muito mais.</p>
          </Texto>
          <OrangeButton/>
      </Content>
    </Container>
  );
}

export default Home;
