import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputDni from './InputDni';
import InputPw from './InputPw';
import ButtonIngresar from './ButtonIngresar';
import ButtonRegistrarse from './ButtonRegistrarse';
import ButtonAyuda from './ButtonAyuda';
import ButtonAyuda2 from './ButtonAyuda2';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    padding: 20,
    height: '60vh',
    width: 500,
    margin:'-80px auto'
  },
  media: {
    height: 500,
  },
 
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      
      <CardActionArea>
        <CardContent style={{backgroundColor: "#2979ff"}} >
        <Typography >Portal de <strong>Datos Abiertos</strong></Typography>
        </CardContent>
        <CardContent >
        <Grid container alignItems="center">
          <Grid item><InputDni /></Grid>
          <Grid item><InputPw /></Grid>
          </Grid>
          <Grid container margin="auto">
          <Grid item xs={12} ><ButtonIngresar /> </Grid>

          <Grid item sm={6}><ButtonRegistrarse /></Grid> <Grid item sm={6}><ButtonAyuda2 /></Grid>
          </Grid>

        </CardContent>
      </CardActionArea>
    

        




    </Card>
  );
}