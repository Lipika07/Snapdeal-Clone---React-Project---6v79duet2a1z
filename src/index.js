import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './components/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-2fw1t1vicdgye1al.us.auth0.com"
  clientId="vefIZqVRIbL2mco8eUp6Kl0vAyItNwHx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Context>
      <App />
    </Context>
  </Auth0Provider>,
);
