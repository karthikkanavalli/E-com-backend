import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserModel } from "../models/UserModel.js";

let saltRounds = 10;

let signup = async (req, res) => {
  console.log(req.body);
  let user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    res.send({ message: "User already exists", success: false });
  } else {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    let newUser = await UserModel.create(req.body);
    let atoken = jwt.sign(
      { email: newUser.email, id: newUser._id },
      "something",
      { expiresIn: "1h" }
    );
    res.send({
      newUser,
      success: true,
      atoken,
      message: "User singup successfully",
    });
  }
};

let login = async (req, res) => {
  console.log(req.body, "from login api");
  let user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      let atoken = jwt.sign(
        {
          email: user.email,
          id: user._id,
          role: user.role,
        },
        "something",
        { expiresIn: "15m" }
      );
      let refreshToken = jwt.sign(
        { email: user.email, id: user._id },
        "refreshToken",
        { expiresIn: "15m" }
      );
      let { name, email, mobile, role , _id} = user;
      res.send({
        user: { name, email, mobile, role, _id},
        success: true,
        resfreshToken: refreshToken,
        atoken: atoken,
        message: "User login successfully",
      });
    } else {
      res.send({ message: "Incorrect password", success: false });
    }
  }
};

export { login, signup };
