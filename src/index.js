import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Header from './components/Header';



ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme= {theme}>
    <Header /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
