import React, { FC } from 'react'
import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import { detailsTheme, personDetailsTheme } from './styled-portrait-data';
import { IPortraitDataProps } from './portrait-data.interface';

export const PortraitData: FC<IPortraitDataProps> = (props) => {
  const { peopleData } = props;

  return (
    <>
      <ThemeProvider theme={detailsTheme}>
        <Grid container item >
              <Box>
                <Typography variant='h3' fontFamily="'Inter', sans-serif" fontWeight="800">{peopleData?.name}</Typography>
              </Box>
              <Box display="flex" gap="20px">
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
          </ThemeProvider>
          <ThemeProvider theme={personDetailsTheme}>
            <Grid container>
                  <Box>
                    <Typography variant='body1'>
                      Age: {peopleData?.birth_year}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      Eye color: {peopleData?.eye_color}
                    </Typography>
                  </Box>
        </Grid>
      </ThemeProvider>
    </>
  )
}
