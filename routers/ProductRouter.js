import express from "express";
import { getproducts } from "../Controllers/ProductController.js";

let ProductRouter = express.Router();

ProductRouter.route("/products").get(getproducts)

export { ProductRouter }