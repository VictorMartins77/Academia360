import React from 'react';
import { Content, Container, OrangeTitle,Titulo,Texto} from './styles'; // Import styled components
import Header from '../../components/Header/App';
import OrangeButton from '../../components/OrangeButton/App';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';


function Home() {
  return (
    <Container>
      <Section1/>
      <Section2/>
    </Container>
  );
}

export default Home;
