import { createContext, useContext } from "react";
import { IStarWarsData } from "../../interface/people.interface";

export interface StarWarsContent {
  star_wars_data: IStarWarsData[];
  getStarWarsData: (data: IStarWarsData) => void;
}

export const AppContext = createContext<StarWarsContent>({
  star_wars_data: [],
  getStarWarsData: () => {},
});

export const useGlobalContext = () => useContext(AppContext);
