import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  userName: string;
  email?: string;
  gender: "male" | "female";
  dateOfBirth: string;
  isMarried: boolean;
}

export interface INameAndEmailMethod {
  nameAndEmail(): string;
}

export interface UserModel extends Model<IUser, {}, INameAndEmailMethod> {
  getAllAdmin(): Promise<HydratedDocument<IUser, INameAndEmailMethod>>;
}
