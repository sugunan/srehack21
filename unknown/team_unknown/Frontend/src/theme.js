import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#0562f7',
      light:'#FF7E00'
      
    },

    error:{
      main:'#FF7E00'
    },

    background:{
        main: '#fff'
    }
    
  },
});

export default theme