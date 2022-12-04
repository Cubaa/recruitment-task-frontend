import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Grid, Paper, ThemeProvider } from '@mui/material'
import { Portrait } from './portrait/portrait';
import { PortraitData } from './portrait-data/portrait-data';
import { useQuery } from 'react-query';
import { fetchPeople } from '../../../utils/fetch-people';
import { buttonStyle, contentTheme } from './styled-content';
import { SharedButton } from '../../../shared/button/shared-button';
import { IPeople, IStarWarsData } from '../../../interface/people.interface';
import { AxiosError } from 'axios'
import { useGlobalContext } from '../../../contexts/starwars/starwars.context';

export const Content: FC = () => {
  const [id, setId] = useState<number>(1)
  const {isLoading, isError, error, data: peopleData} = useQuery<IPeople, AxiosError>(['people', id], () => fetchPeople(id))
  const { getStarWarsData, starWarsData } = useGlobalContext()
  let component = null;

  const data = useMemo(() => ({
    name: peopleData?.name,
    created: peopleData?.created,
    vehicles: peopleData?.vehicles
  }), [peopleData?.created, peopleData?.name, peopleData?.vehicles])

  const nextProfile = useCallback(() => {
    if (id === 88) { 
      setId(1) 
      return
    } 
    setId(id => id + 1)
  }, [id])

  useEffect(() => {
    const isExist = starWarsData.some((hero: IStarWarsData) => hero.name === data.name)
    if (!isLoading && !isExist) {
      getStarWarsData(data)
    }
  }, [isLoading, data])

  if (isError) {
     component = <h1>{error.message}</h1>
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
