import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/index'
import bannerImage from './assets/img/banner.svg'; // Importe sua imagem
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/SignIn';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <div className="Bannner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', height: '100vh' }}>
      <Home />
    </div> */}
    <SignIn/>
  </React.StrictMode>,
);