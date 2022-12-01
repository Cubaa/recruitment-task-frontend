import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          backgroundColor: "#D9D9D9",
        }
      }
    }
  }
});