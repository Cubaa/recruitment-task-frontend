import { responsiveFontSizes, createTheme } from "@mui/material";

export const formTheme = responsiveFontSizes(createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          mt: 12
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'right',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontWeight: 300,
          '&.Mui-error': {
            color: "#FF0000",
          }
        }
      }
    },
    MuiDivider: {
      defaultProps: {
        sx: {
          mt: 1.5,
          width: '166.17px',
          height: '9.29px',
          backgroundColor: '#071594'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#000"
          },
          "&.Mui-error": {
            color: "#000"
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          color: '#000',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&&:hover::before": {
            borderBottom: "1.55px solid #000",
          },
          ':after': {
            borderBottomColor: "#0000"
          },
          ':before': {
            borderBottom: "1.55px solid #000",
          },
          "&.Mui-error:after": {
            borderBottomColor: "#FF0000"
          },
        },
        root: {
          color: "#000",
          fontFamily: 'Inter, sans-serif',
          paddingTop: '0.5rem'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '.MuiTypography-root': {
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: "14px"
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          width: "225px",
          height: "55px",
          borderRadius: "20px",
          backgroundColor: "#071594",
          boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
          fontFamily: "'Lato', sans-serif",
          fontWeight: "400",
          fontStyle: "italic",
          '&:hover': {
            backgroundColor: "#071594",
            boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
      },
    }
      }
    }
  },
  typography: {
    h6: {
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '20px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase'
    },
    button: {
      textTransform: "lowercase",
      fontSize: "20px"
    }
  },
}))