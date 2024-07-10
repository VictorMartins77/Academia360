

import React from 'react';
import { Content, Navigation, Logo } from './styles';
import Academia from '../../assets/img/ACADEMIA.png';
import OrangeButton from '../../components/OrangeButton/App';

function Header() {
  return (
    <Content>
      <Logo src={Academia} alt="Logo do site" />
      <Navigation>
        <ul>
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Contacte-nos</li>
          <li>Nossos planos</li>
        </ul>
      </Navigation>
      <OrangeButton/>
    </Content>
  );
}

export default Header;


