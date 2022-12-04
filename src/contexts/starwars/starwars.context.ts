import { createContext, useContext } from "react"
import { IStarWarsData } from "../../interface/people.interface"

export interface StarWarsContent {
  starWarsData: IStarWarsData[]
  getStarWarsData:(data: IStarWarsData) => void
}
export const AppContext = createContext<StarWarsContent>({
  starWarsData: [],
  getStarWarsData: () => {},
})
export const useGlobalContext = () => useContext(AppContext)