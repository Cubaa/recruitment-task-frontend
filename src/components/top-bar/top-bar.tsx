import { Box, Button, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

export const TopBar: FC = () => {
  return (
    <Grid container item px={4} py={2} width="100%" display="flex" sx={{
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <Box>
        <Typography>Jakub Ziemiański</Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{
          width: "236px",
          height: "60px",
          borderRadius: "20px",
          backgroundColor: "#40483A",
          boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
          fontFamily: "'Lato', sans-serif",
          fontWeight: "400",
          fontStyle: "italic",
          '&:hover': {
            backgroundColor: "#40483A",
            boxShadow: "10px 4px 4px rgba(0, 0, 0, 0.75)",
          },
        }}><Typography variant="button" textTransform="lowercase">formularz rejestracyjny</Typography></Button>
      </Box>
    </Grid>
  )
}
