import { createTheme } from '@mui/material/styles'
import { grey, blue } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    trello: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
  }
  interface PaletteOptions {
    trello: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#f9fafc',
    },
    primary: {
      main: '#0079bf',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#172b4d',
      contrastText: '#FFFFFF', 
    },
    error: {
      main: '#eb5a46',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#f2d600',
      contrastText: '#172b4d',
    },
    info: {
      main: '#00c2e0',
      contrastText: '#172b4d',
    },
    success: {
      main: '#61bd4f',
      contrastText: '#172b4d',
    },
    trello: {
      main: '#026aa7',
      light: '#0079bf',
      dark: '#055a8c',
      contrastText: '#FFFFFF',
    },
    grey: {
      100: '#f4f5f7',
      200: '#ebecf0',
      300: '#dfe1e6',
      400: '#c1c7d0',
      500: '#97a0af',
    }
  },
  typography: {
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '14px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'body::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: grey[300],
        },
        '::-webkit-scrollbar-thumb': {
          background: grey[500],
          borderRadius: '4px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          boxShadow: '0 1px 0 rgba(9,30,66,.25)',
        }
      }
    }
  },
})

export default theme
