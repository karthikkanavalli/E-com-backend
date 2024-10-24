import express from "express";


import { login,signup} from "../Controllers/authController.js";

let authRouter = express.Router();


authRouter.route("/signup").post(signup)
authRouter.route("/login").post(login)


export  {authRouter}
