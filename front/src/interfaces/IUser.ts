import { IOrder } from "./IOrder";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  address: string;
  phone: string;
}

export interface IUser {
  login: boolean;
  user: IUserData;
  token: string;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: ICredential;
  orders: IOrder[];
}

export interface ICredential {
  id: number;
  password: string;
}
