import React, { FC } from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SharedButton } from "../../../shared/button/shared-button";
import { buttonStyle, topBarTheme } from "./styled-top-bar";

export const TopBar: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => navigate("/registration");

  return (
    <ThemeProvider theme={topBarTheme}>
      <Grid
        container
        item
        px={4}
        py={2}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography>Jakub Ziemiański</Typography>
        </Box>
        <Box>
          <SharedButton
            name="formularz rejestracyjny"
            variant="contained"
            style={buttonStyle}
            clickFn={clickHandler}
          />
        </Box>
      </Grid>
    </ThemeProvider>
  );
};
