import { groupsRouter } from "./src/routers/groups.router";

require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./src/routers/user.router";
import errorMiddleware from "./src/middlewares/error.middleware";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/auth", userRouter);
app.use("/groups", groupsRouter);
app.use(errorMiddleware);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Main route");
});

const startServe = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_WRITE_CONNECTION_STRING!);
    app.listen(process.env.PORT, () => {
      console.log(`App started at http://localhost:${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServe();
