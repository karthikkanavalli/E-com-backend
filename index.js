import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import { authRouter } from "./routers/Authrouter.js";
import {verifyToken} from "./utils/verifytoken.js";
import { AdminRouter } from "./routers/AdminRouter.js";
import { ProductRouter } from "./routers/ProductRouter.js";
import { CartRouter } from "./routers/CartRouter.js";

const app = express();

// app.use(bodyParser());
app.use(cors());
app.use(express.json());


// public routes
app.use("/", ProductRouter);
app.use("/", authRouter);

app.use(verifyToken);

// private routes
app.use("/cart",CartRouter)
app.use("/admin", AdminRouter)








app.listen(3000, () => {
  console.log(`Server  listening on port 3000!`);

  mongoose
    .connect("mongodb://127.0.0.1:27017/eApp")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
});
