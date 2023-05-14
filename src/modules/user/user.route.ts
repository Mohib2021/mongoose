import express from "express";
import {
  createUser,
  findSingleUser,
  getAdminFromDb,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminFromDb);

router.post("/createUser", createUser);

router.get("/:id", findSingleUser);

export default router;
