import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo_muni from '../logo_muni.svg';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex',
     flexDirection: 'column',
     minHeight: '5px',
    margin: '120px auto 15px auto'
 
  
  },
  main: {
    //marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    //padding: theme.spacing(3, 2),
    marginTop: '5px',
    
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
    
      <footer className={classes.footer}>
      <Divider />
      <br />
        <Grid align="center">
       
        <img src={logo_muni} alt="Logo" width="40%" height="70px" align="center"/>;
        </Grid>
        
      </footer>
    </div>
  );
}