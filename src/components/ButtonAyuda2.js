import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import MuiButton from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";

const Button = withStyles(theme => ({
  root: props =>
    props.color === "success" && props.variant === "contained"
      ? {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.main,
          "&:hover": {
            backgroundColor: theme.palette.success.dark,
          
            "@media (hover: none)": {
              backgroundColor: theme.palette.success.main
            }
          }
        }
      : {}
}))(MuiButton);

const theme = createMuiTheme();

theme.palette.success = theme.palette.augmentColor({
  main: '#f50057',
});

function ButtonAyuda2() {
  return (
    <div style={{ width: '100%' }, {margin: 0}}>
    <ThemeProvider theme={theme}>
     
      <Button variant="contained" color="success" size="medium" fullWidth>
       Ayuda
      </Button>
    </ThemeProvider>
    </div>
  );
}

export default ButtonAyuda2;