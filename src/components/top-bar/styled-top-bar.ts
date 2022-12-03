import { createTheme, responsiveFontSizes, SxProps } from "@mui/material";

export const topBarTheme = responsiveFontSizes(createTheme({
  typography: {
    button: {
      textTransform: "lowercase",
      fontSize: "20px"
    }
  }
}))

export const buttonStyle: SxProps = {
  bgcolor: "#40483A",
  width: '235',
  height: '60',
  boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
  fontFamily: "'Lato', sans-serif",
  fontWeight: "400",
  fontStyle: "italic",
  borderRadius: "20px",
  cursor: 'pointer',
  color: "#fff",
  '&:hover': {
    backgroundColor: "#40483A",
    boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
  },
}