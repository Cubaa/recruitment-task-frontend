import React, { FC } from 'react'
import { Box, Button, Grid, Typography, } from '@mui/material'
import { Portrait } from './portrait/portrait';
import { PortraitData } from './portrait-data/portrait-data';

export const Content: FC = () => {

  return (
    <Grid container item width="100%" component="section" display="flex" flexDirection={{
      xs: "row",
      md: "column"
    }} sx={{
      alignItems: "center",
      justifyContent: 'center'
    }}>
        <Grid container width="800px" height="740px" display="flex" flexDirection="column" sx={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: {
            xs: "none",
            md: "500px 60px 300px 100px",
          },
          background: "rgba(54, 44, 44, 0.39)",
          boxShadow: {
            sm: "none",
            md: "12px 4px 4px rgba(0, 0, 0, 0.6)"
          },
          backdropFilter:"blur(280px)"
        }}>
          <Portrait />
          <PortraitData />
        </Grid>
        <Box py={2}>
          <Button variant="contained" sx={{
            width: "220px",
            backgroundColor: "#35660E",
            boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
            fontFamily: "'Lato', sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            borderRadius: "20px",

            '&:hover': {
              backgroundColor: "#40483A",
              boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
            },
          }}><Typography variant="button" textTransform="lowercase">next profiles</Typography></Button>
        </Box>
    </Grid>
  )
}
