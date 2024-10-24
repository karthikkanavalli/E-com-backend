import express from "express";
import { addToCart, getCart } from "../Controllers/CartController.js";

let CartRouter = express.Router();

CartRouter.route("/addtocart").post(addToCart);
CartRouter.route("/getcart").get(getCart);



export { CartRouter };