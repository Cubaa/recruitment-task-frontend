import React, { FC, useCallback, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";
import { IStarWarsData } from "./interface/people.interface";
import { AppContext } from "./contexts/starwars/starwars.context";
import { Registration } from "./components/registration/registration";
import { Home } from "./components/home/home";

export const App: FC = () => {
  const [star_wars_data, setStar_wars_data] = useState<IStarWarsData[]>([]);

  const getStarWarsData = useCallback((data: IStarWarsData) => {
    setStar_wars_data((star_wars_data) => [...star_wars_data, data]);
  }, []);

  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Registration />,
      path: "/registration",
    },
  ]);

  return (
    <Grid
      container
      width={{
        xs: "100%",
        lg: "1130px",
      }}
      bgcolor="#FFFFFF"
      minHeight="100vh"
      margin="0 auto"
      component="main"
    >
      <AppContext.Provider value={{ getStarWarsData, star_wars_data }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </Grid>
  );
};
