import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const Login =()=>{
    const paperStyle={padding: 0, height: '70vh', width: 280, margin: '20px auto'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                hola mundillo

            </Paper>
        </Grid>
    )
}

export default Login;