import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import puente from '../puente.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 0,
  },

  header: {
    
    marginTop: 'auto',
    
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
    
      <header className={classes.header}>
        <Container maxWidth="sm">
        <img src={puente} alt="Logo" />;
          
        </Container>
      </header>
    </div>
  );
}