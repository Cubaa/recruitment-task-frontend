import React, { FC, useCallback, useState } from 'react'
import { Box, Button, Grid, Paper, ThemeProvider, Typography, } from '@mui/material'
import { Portrait } from './portrait/portrait';
import { PortraitData } from './portrait-data/portrait-data';
import { useQuery } from 'react-query';
import { fetchPeople, IPeople } from '../../utils/fetch-people';
import { contentTheme } from './styled-content';

export const Content: FC = () => {
  const [id, setId] = useState<number>(1)
  const {isLoading, isError, data: peopleData} = useQuery<IPeople, Error>(['people', id], () => fetchPeople(id))
  let component = null;

  const nextProfile = useCallback(() => {
    if (id === 83) { 
      setId(1) 
      return
    } 
    setId(id => id + 1)
  }, [id])

  if (isError) {
     component = <h1>Failed to fetch</h1>
  }

  if (isLoading) {
     component = <h1>Loading...</h1>
  } else if (!isLoading && !isError) {
    component = <PortraitData peopleData={peopleData}/>
  }

  return (
    <ThemeProvider theme={contentTheme}>
      <Grid 
        container 
        item 
        width="100%" 
        component="section" 
        display="flex" 
      >
          <Paper>
            <Portrait />
            {component}
          </Paper>
          <Box py={2}>
            <Button variant="contained" onClick={nextProfile}>
              <Typography variant="button" textTransform="lowercase">next profiles</Typography>
            </Button>
          </Box>
      </Grid>
    </ThemeProvider>
  )
}
