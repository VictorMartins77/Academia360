import React from 'react';
import { Content, Container } from './styles'; // Import styled components
import Header from '../../components/Header/App';
import bannerImage from '../../assets/img/banner.svg';


function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <p>Olá Né</p>
      </Content>
    </Container>
  );
}

export default Home;
