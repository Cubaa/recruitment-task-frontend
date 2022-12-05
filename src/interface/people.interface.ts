export interface IPeople {
  name: string;
  eye_color: string;
  birth_year: string;
  vehicles: string[];
  created: string;
}

export interface IStarWarsData {
  name: string | undefined;
  vehicles: string[] | undefined;
  created: string | undefined;
}
