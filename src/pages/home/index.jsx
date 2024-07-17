import React from 'react';
import { Content, Container, OrangeTitle,Titulo,Texto} from './styles'; // Import styled components
import Header from '../../components/Header/App';
import OrangeButton from '../../components/OrangeButton/App';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';


function Home() {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Section1 style={{ marginBottom: 0, padding: 0 }} />
      <Section2 style={{ marginTop: 0, padding: 0 }} />
    </Container>
  );
}

export default Home;
