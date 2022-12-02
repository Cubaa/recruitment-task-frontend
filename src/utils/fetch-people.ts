export interface IPeople {
  name: string;
  eye_color: string;
  birth_year: string;
}

export const fetchPeople = async (id: number = 1): Promise<IPeople>=> {
  const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`)
  const data = await response.json()
  return data;
}