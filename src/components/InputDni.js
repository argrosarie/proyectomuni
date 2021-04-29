import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import InputLabel from '@material-ui/core/InputLabel';

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
          <TextField
          id="filled-number"
          label="DNI"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          
     
          </Grid>
          <Grid item> 
          <FaceIcon color ="primary" position="end" fontSize="large"  />
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}