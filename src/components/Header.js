import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import puente from '../puente.png';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '5px',
   margin: '0 auto 15px auto',
    marginLeft: '-30px',
  },

  //head: {
    //width: '100px',
    //marginTop: 'auto',
    
 // },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline /> 
    
      <header className={classes.header}>
        <Grid container >
        <Grid item>
        <img src={puente} alt="Logo" width='100%' />;
          
        </Grid>
        </Grid>
      </header>
    </div>
  );
}