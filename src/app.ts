import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "../src/modules/user/user.route";
const app: Application = express();

app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

export default app;
