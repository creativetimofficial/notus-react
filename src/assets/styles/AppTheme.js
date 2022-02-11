import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'light',
      primary:  {
        main: '#bb86fc',
        light: '#c89efc',
        dark: '#825db0'
      },
      background: {
        main: '#F7F8FC',
        secondary: '#828282',
      },
      success: {
        main: '#94c93d',
        light: '#a2cf6e',
        dark: '#618833'
      },
      text: {
        primary: '#eeeeee',
        secondary: '#000000'
      },
      warning: {
        fontSize: '14pt',
        main: '#3dc1c9',
        light: '#63cdd3',
        dark: '#2a878c'
      },
      white: {
        main: '#ffffff',
        light: '#ffffff',
        dark: '#ffffff',
      },
      black: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
      },
      blue: {
        main: '#4269f5',
        light: '#162f8a',
        dark: '#5e7ae0',
      }
    },
    typography: {
        color:'#1e1e1e'
    },
    shape: {
      borderRadius: {
        xl: '.75em'
      },
    }
});

