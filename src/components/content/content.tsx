import React, { FC, useCallback, useState } from 'react'
import { Box, Grid, Paper, ThemeProvider } from '@mui/material'
import { Portrait } from './portrait/portrait';
import { PortraitData } from './portrait-data/portrait-data';
import { useQuery } from 'react-query';
import { fetchPeople } from '../../utils/fetch-people';
import { buttonStyle, contentTheme } from './styled-content';
import { SharedButton } from '../../shared/button/shared-button';
import { IPeople } from '../../interface/people.interface';

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
            <SharedButton name='next profiles' variant='contained' style={buttonStyle} clickFn={nextProfile}/>
          </Box>
      </Grid>
    </ThemeProvider>
  )
}
