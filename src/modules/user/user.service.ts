import { IUser } from "./user.interface";
import { User } from "./user.model";

export const insertUserDataToDb = async (user: IUser): Promise<IUser> => {
  const userData = new User(user);
  await userData.save();
  return userData;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const allUsers = await User.find();
  return allUsers;
};

export const getAdmins = async () => {
  const allUsers = await User.getAllAdmin();
  return allUsers;
};

export const findUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: id }, { email: 1 });
  return user;
};
