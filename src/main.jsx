import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/index'
import bannerImage from './assets/img/banner.svg'; // Importe sua imagem
import GlobalStyle from './styles/global  ';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
     <div className="app"  style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        /* Outras propriedades de estilo, se necessário */
      }}>
     <Home />
    </div>
    
  </React.StrictMode>,
)
