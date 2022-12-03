import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Registration } from './components/registration/registration';
import { Grid } from '@mui/material';
import { Profile } from './components/profile/profile';

export const App: FC = () => {
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
     <RouterProvider router={router} />
    </Grid>
  );
}
