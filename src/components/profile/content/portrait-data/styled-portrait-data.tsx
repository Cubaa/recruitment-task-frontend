import { createTheme, responsiveFontSizes } from "@mui/material";

export const detailsTheme = responsiveFontSizes(createTheme({
  components: {
    MuiGrid: {
      defaultProps: {
        sx: {
          width: {
            sm: "100%"
          },
          alignItems: "center",
          justifyContent: "center",
          gap: {
            xs: 2,
            sm: 4
          },
          pt: 2,
          flexDirection: "row"
        }
      }
    }
  },
}));

export const personDetailsTheme = responsiveFontSizes(createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          paddingTop: "0.5rem",
          justifyContent: "center",
          flexDirection: "column" ,
        }
      },
      defaultProps: {
        sx: {
          width: {
            xs: "60%",
            sm: "30%"
          },
          alignItems: {
            xs: "center",
            sm: "flex-start"
          }
        }
      }
    }
  },
  typography: {
    body1: {
      fontSize: "20",
      fontFamily: "'Inter', sans-serif" ,
      fontWeight: 100, 
      fontStyle: "italic"
    },
  },
}));
