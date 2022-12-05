import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          boxSizing: "border-box",
          backgroundColor: "#D9D9D9",
        },
      },
    },
  },
});
