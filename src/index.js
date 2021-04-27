import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import InputWithIcon from './components/InputDni';



ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme= {theme}>
    <InputWithIcon /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
