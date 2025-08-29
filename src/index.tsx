import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//styles
import "./styles/global.css"
import Abas from './components/menu-aba';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Abas/>
    <main>
      <App />
    </main>
  </React.StrictMode>
);
reportWebVitals();
