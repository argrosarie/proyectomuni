import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: 'purple'[500],
    secondary: 'blue'[600],
  },
  status: {
      danger: 'green'[25],
  }
});

export default theme; 