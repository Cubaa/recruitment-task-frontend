import React, { FC } from 'react'
import { Box, createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'

export const PortraitData: FC = () => {
  let theme = createTheme({
    typography: {
      body1: {
        fontSize: "20",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Grid display="flex" width={{
            sm: "65%"
          }} alignItems="center" justifyContent="flex-end" gap={8} pt={2}>
          <ThemeProvider theme={theme}>
            <Box>
              <Typography variant='h3' sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "800",
              }}>Name</Typography>
            </Box>
            </ThemeProvider>
            <Box display="flex" sx={{
              gap: "20px"
            }}>
              <Box component="img" src='./icon2.svg' alt="icon2" maxWidth={{
                xs: "30%",
                md: "100%"
              }} sx={{
                cursor: "pointer"
              }}>
              </Box>
              <Box component="img" src='./icon1.svg' alt="icon1" maxWidth={{
                xs: "30%",
                md: "100%"
              }} sx={{
                cursor: "pointer"
              }}>
              </Box>
            </Box>
          </Grid>
          <Grid container display="flex" pt={2} sx={{
            justifyContent: "center",
          }}>
            <Box sx={{
              width: {
                xs: "90%",
                sm: "30%"
              }
            }}>
              <ThemeProvider theme={theme}>
                <Box>
                  <Typography variant='body1' sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "100",
                    fontStyle: "italic"
                  }}>
                    Age:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='body1' sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "100",
                    fontStyle: "italic"
                  }}>
                    Eye color:
                  </Typography>
                </Box>
              </ThemeProvider>
            </Box>
          </Grid>
    </>
  )
}
