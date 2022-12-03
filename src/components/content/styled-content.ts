import { createTheme, responsiveFontSizes, SxProps } from "@mui/material";

export const contentTheme = responsiveFontSizes(createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
       root: {
        alignItems: "center",
        justifyContent: 'center'
       }
      },
      defaultProps: {
        sx: {
          flexDirection:{
            xs: "row",
            md: "column"
          },
          justifyContent: {
            xs: "center",
            md: "normal"
          },
          alignItems: {
            xs: "normal",
            md: "center"
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "800px",
          height: "740px",
          background: "rgba(54, 44, 44, 0.39)",
          backdropFilter:"blur(280px)"
        }
      },
      defaultProps: {
        sx: {
          borderRadius: {
            xs: "none",
            md: "500px 60px 300px 100px",
          },
          boxShadow: {
            sm: "none",
            md: "12px 4px 4px rgba(0, 0, 0, 0.6)"
          },
          gap: {
            xs: 2,
            sm: 0
          }
        }
      },
    },
  },
  typography: {
    button: {
      fontSize: '20px',
      textTransform: 'lowercase'
    }
  }
}))

export const buttonStyle: SxProps = {
  bgcolor: "#35660E",
  width: '220',
  height: '35',
  boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
  fontFamily: "'Lato', sans-serif",
  fontWeight: "400",
  fontStyle: "italic",
  borderRadius: "20px",
  cursor: 'pointer',
  color: "#fff",
  '&:hover': {
    backgroundColor: "#35660E",
    boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
  },
}