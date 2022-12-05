import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactElement,
} from "react";
import { AxiosError } from "axios";
import { Box, Grid, Paper, ThemeProvider } from "@mui/material";
import { IPeople, IStarWarsData } from "../../../interface/people.interface";
import { useGlobalContext } from "../../../contexts/starwars/starwars.context";
import { Image } from "./image/image";
import { HeroData } from "./hero-data/hero-data";
import { useQuery } from "react-query";
import { fetchPeople } from "../../../utils/fetch-people";
import { buttonStyle, contentTheme } from "./styled-content";
import { SharedButton } from "../../../shared/button/shared-button";

export const Content: FC = () => {
  const [id, setId] = useState<number>(1);
  const {
    isLoading,
    isError,
    error,
    data: peopleData,
  } = useQuery<IPeople, AxiosError>(["people", id], () => fetchPeople(id));
  const { getStarWarsData, star_wars_data } = useGlobalContext();
  let component: ReactElement | null = null;

  const data = useMemo(
    () => ({
      name: peopleData?.name,
      created: peopleData?.created,
      vehicles: peopleData?.vehicles,
    }),
    [peopleData?.created, peopleData?.name, peopleData?.vehicles]
  );

  const nextProfile = useCallback(() => {
    if (id === 88) {
      setId(1);
      return;
    }
    setId((id) => id + 1);
  }, [id]);

  useEffect(() => {
    const isExist = star_wars_data.some(
      (hero: IStarWarsData) => hero.name === data.name
    );
    if (!isLoading && !isExist) {
      getStarWarsData(data);
    }
  }, [isLoading, data]);

  if (isError) {
    component = <h1>{error.message}</h1>;
  }

  if (isLoading) {
    component = <h1>Loading...</h1>;
  } else if (!isLoading && !isError) {
    component = <HeroData peopleData={peopleData} />;
  }

  return (
    <ThemeProvider theme={contentTheme}>
      <Grid container item width="100%" component="section" display="flex">
        <Paper>
          <Image />
          {component}
        </Paper>
        <Box py={2}>
          <SharedButton
            name="next profiles"
            variant="contained"
            style={buttonStyle}
            clickFn={nextProfile}
          />
        </Box>
      </Grid>
    </ThemeProvider>
  );
};
