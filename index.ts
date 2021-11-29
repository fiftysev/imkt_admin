require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { userRouter } from "./src/routers/user.router";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Main route");
});

const startServe = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_WRITE_CONNECTION_STRING!);
    app.listen(process.env.PORT, () => {
      console.log(
        `Example app listening at http://localhost:${process.env.PORT}`
      );
    });
  } catch (e) {
    console.log(e);
  }
};

startServe();
