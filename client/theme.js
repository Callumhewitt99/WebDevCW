import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#ff4930',  // light red
      main: '#ff3030',  // red
      dark: '#cc2929', // dark red
      contrastText: '#fff',
    },
    secondary: {
      light: '#94d4ff', // light blue
      main: '##0099ff',   // blue
      dark: '#006ab0',   // dark blue 
      contrastText: '#000',
    },
      openTitle: '#3f4771',
      protectedTitle: '#3f4771',
      type: 'light'
    },

  })

  export default theme