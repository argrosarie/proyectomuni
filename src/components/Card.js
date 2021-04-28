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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent style={{backgroundColor: "#2979ff"}} >
             Portal de <strong>Datos Abiertos</strong>
        </CardContent>
        <CardContent>
          <InputDni />
          <InputPw />
          <ButtonIngresar /> <br />
          <ButtonRegistrarse /><ButtonAyuda />
         
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}