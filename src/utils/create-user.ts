import axios, { AxiosResponse } from 'axios'
import { ICreateUser } from '../interface/create-user.interface';

export const createUser = async (data: ICreateUser): Promise<AxiosResponse> => {
  const body = data;
  return await axios.post("https://example/", body);
}