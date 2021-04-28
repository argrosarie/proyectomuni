import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function ButtonIngresar() {
    return (
      <div style={{ width: '100%' }}>
<Box component="span" display="block" p={1} m={1}>
      {/* <Grid container align="center"> */}
        <Grid 
        //item xs={12}
        >
      <Button variant="contained"  color="secondary" size="medium" fullWidth
      >Ingresar</Button>
        </Grid>
      {/* </Grid> */}
      </Box>
      </div>
    );
  }

  export default ButtonIngresar;

  