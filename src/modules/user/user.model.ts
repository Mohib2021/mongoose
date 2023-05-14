import { Model, Schema, model } from "mongoose";
import { INameAndEmailMethod, IUser, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, INameAndEmailMethod>;

const userSchema = new Schema<IUser, UserModel, INameAndEmailMethod>({
  id: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: false },
  email: { type: String },
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: { type: String, required: true },
  isMarried: { type: Boolean, required: true },
});

userSchema.static("getAllAdmin", async function getAllAdmin(): Promise<
  IUser[]
> {
  const admins = this.find({ role: "admin" });
  return admins;
});

userSchema.method("nameAndEmail", function nameAndEmail(): string {
  return this.userName + " " + this.email;
});

export const User = model<IUser, UserModel>("User", userSchema);
