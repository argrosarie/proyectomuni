import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: grey[50],
    },
    secondary: {
      main: teal['A700']
    },
    
    success: {
      main: purple[900],
    }
    
  },
  
  
 
  
});

export default theme; 