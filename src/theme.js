import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      sec: '#374687',
      text: 'rgb(209, 216, 227)'
    },
    secondary: {
      main: '#19857b',
      rgb: '255,255,255',
      rgb2: '213,192,180'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
