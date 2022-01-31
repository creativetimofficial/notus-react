import { createTheme } from '@mui/material/styles';

export const theme = createTheme({


    palette: {
      mode: 'dark',
      
        primary:  {
            main: '#bb86fc',
            light: '#c89efc',
            dark: '#825db0'
        },
        success: {
          main: '#94c93d',
          light: '#a2cf6e',
          dark: '#618833'
        },
        text: {
          primary: '#eeeeee'
        },
        warning: {
          fontSize: '14pt',
          main: '#3dc1c9',
          light: '#63cdd3',
          dark: '#2a878c'
        }
      

    },
    
    typography: {
        color:'#1e1e1e'

    },



});

