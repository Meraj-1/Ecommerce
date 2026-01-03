import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import connectDB from "./db/index.js";
dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieparser());

app.use(async (req, res, next) => {
  connectDB()
    .then(() => {
      next();
    })
    .catch((error) => {
      next(error);
    });
});

//routes import

import userRouter from "./routes/user.routes.js";

app.get("/", (req, res) => {
  res.send("API is working on Vercel!");
});

app.use("/api/user", userRouter);

export { app };