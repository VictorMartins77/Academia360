import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/SignIn';
import { Routes } from './routes';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <GoogleOAuthProvider clientId="1075346619173-tfrpip57jhh5gsrbm267v0ru6ao2m2dg.apps.googleusercontent.com">
        <GlobalStyle />
        {/* <div className="Bannner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', height: '100vh' }}>
          <Home />
        </div> */}
        <Routes />
        </GoogleOAuthProvider>
  </React.StrictMode>,
);