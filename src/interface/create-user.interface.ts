import { FieldValues } from "react-hook-form";
import { IStarWarsData } from "./people.interface";

export interface ICreateUser {
  formData: FieldValues;
  starWarsData: IStarWarsData[];
}