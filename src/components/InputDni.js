import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputDni() {
  const classes = useStyles();

  return (
    <div>
     
      <div className={classes.margin}>
        
        <Grid
        container spacing={1} 
        alignItems="flex-end" 
        >
         
          <Grid item>
            <TextField id="input-with-icon-grid" label="DNI" />
          </Grid>
          <Grid item>
            <FaceIcon color ="primary" />
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}