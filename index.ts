require("dotenv").config();
import * as os from "os";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

import { groupsRouter } from "./src/routers/groups.router";
import { userRouter } from "./src/routers/user.router";
import { mastersRouter } from "./src/routers/masters.router";
import errorMiddleware from "./src/middlewares/error.middleware";

const app = express();
import * as path from "path";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/auth", userRouter);
app.use("/api/groups", groupsRouter);
app.use("/api/masters", mastersRouter);
app.use(errorMiddleware);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const startServe = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_WRITE_CONNECTION_STRING!);
    app.listen(process.env.PORT, () => {
      console.log(`App started at ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServe();
