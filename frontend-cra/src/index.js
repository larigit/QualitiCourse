import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // 1º argumento: componente jsx
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 2º argumento: onde a pag vai ser carregada
  document.getElementById('root'),
);
