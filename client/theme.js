import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#ff4930',
      main: '#ff3030',
      dark: '#cc2929',
      contrastText: '#fff',
    },
    secondary: {
      light: '#94d4ff',
      main: '##0099ff',
      dark: '#006ab0',
      contrastText: '#000',
    },
      openTitle: '#3f4771',
      protectedTitle: '#3f4771',
      type: 'light'
    },

  })

  export default theme