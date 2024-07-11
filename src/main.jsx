import React from 'react'
import ReactDOM from 'react-dom/client'
import bannerImage from './assets/img/banner.svg'; // Importe sua imagem
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/SignIn';
import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <GlobalStyle />
        {/* <div className="Bannner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', height: '100vh' }}>
          <Home />
        </div> */}
        <Routes />
  </React.StrictMode>,
);