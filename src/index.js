import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaCard from './components/Card';
import ButtonIngresar from './components/ButtonIngresar';
import ButtonRegistrarse from './components/ButtonRegistrarse';
import ButtonAyuda from './components/ButtonAyuda';
ReactDOM.render(
  <React.StrictMode>
    <ButtonAyuda/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
