import { IPeople } from "../interface/people.interface";
import axios from "axios";

export const fetchPeople = async (id: number): Promise<IPeople> => {
  return axios
    .get(`https://swapi.py4e.com/api/people/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Problem fetching data");
    });
};
