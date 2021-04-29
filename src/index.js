import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';



ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme= {theme}>
    <Header /> 
    <Card />
    <Footer /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
