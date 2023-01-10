import { createTheme } from '@mui/material'

export const Colors = {
  primary: '#5a31e0',
  secondary: '#7047f5',
  success: '#4caf50',
  info: '#913be3',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#2c1c63',
  light: '#baabed',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#a5ce1f',
  shaft: '#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  white: '#fff',
  black: '#000',
  shaft_opacity: 'rgba(0, 0, 0, 0.7)',
  dark_footer: '#2c3333'
}

const overrides: Strings = {
  palette: {},
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: Colors.white,
          fontFamily: 'Roboto Condensed'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
          fontFamily: 'Roboto Condensed',
          borderRadius: '18px 18px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto Condensed'
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: Colors.primary,
          fontWeight: '800',
          backgroundColor: Colors.inverse
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: Colors.dark,
          fontWeight: '800',
          borderRadius: '18px 18px'
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: '18px 18px'
        }
      }
    }
  }
}

const getNewPalette = (colors: Strings) => {
  for (const property in colors) {
    overrides.palette[property] = { main: colors[property] }
  }
}

getNewPalette(Colors)

const theme = createTheme(overrides)

export default theme
