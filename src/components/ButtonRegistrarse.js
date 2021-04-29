import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



function ButtonRegistrarse() {
    return (
      <div style={{ width: '95%' } }>
      <Grid align="center">
      <Button variant="contained"  color="primary" size="medium" fullWidth>
        Registrarse
      </Button>
      </Grid>
      </div>
    );
  }

  export default ButtonRegistrarse;

  