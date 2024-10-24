import express from "express";
import { addproduct, deleteProduct, editProduct, getproducts, getusers } from "../Controllers/adminController.js";
import { roleValidator } from "../utils/roleValidator.js";
let AdminRouter = express.Router();

AdminRouter.route("/getusers").get(roleValidator("admin"), getusers);
AdminRouter.route("/addproduct").post(roleValidator("admin"), addproduct);
AdminRouter.route("/getproducts").get(roleValidator("admin"), getproducts);
AdminRouter.route("/deleteproduct").delete(roleValidator("admin"), deleteProduct);
AdminRouter.route("/editproduct").patch(roleValidator("admin"), editProduct);


export { AdminRouter }