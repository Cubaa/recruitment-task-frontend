import React, { FC, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Registration } from './components/registration/registration';
import { Grid } from '@mui/material';
import { Profile } from './components/profile/profile';
import { IStarWarsData } from './interface/people.interface';
import { AppContext } from './contexts/starwars/starwars.context';

export const App: FC = () => {
  const [starWarsData, setStarWarsData] = useState<IStarWarsData[]>([]);

  const getStarWarsData = (data: IStarWarsData) => {
    setStarWarsData(starWarsData => [...starWarsData, data])
  }

  const router = createBrowserRouter([
    {
      element: <Profile />,
      path: "/",
    },
    {
      element: <Registration />,
      path: '/registration'
    }
  ]);

  return (
    <Grid container width={{
      xs: "100%",
      lg: "1130px"
    }} bgcolor="#FFFFFF" minHeight="100vh" margin="0 auto" component="main">
      <AppContext.Provider value={{getStarWarsData, starWarsData}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </Grid>
  );
}
