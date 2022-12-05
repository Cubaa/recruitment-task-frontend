import { FieldValues } from "react-hook-form";
import { IStarWarsData } from "./people.interface";

export interface ICreateUser {
  formData: FieldValues;
  star_wars_data: IStarWarsData[];
}
