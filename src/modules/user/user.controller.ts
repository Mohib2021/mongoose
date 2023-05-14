import { Request, Response } from "express";
import {
  findUser,
  getAdmins,
  getAllUsers,
  insertUserDataToDb,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const bodyData = req.body;

  const user = await insertUserDataToDb(bodyData);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.status(200).json({
    status: "success",
    data: users,
  });
};
export const getAdminFromDb = async (req: Request, res: Response) => {
  const admins = await getAdmins();
  return res.status(200).json({
    status: "success",
    data: admins,
  });
};

export const findSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await findUser(id);
  return res.status(200).json({
    status: "success",
    data: user,
  });
};
