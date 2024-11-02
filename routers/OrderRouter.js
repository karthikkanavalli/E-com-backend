import  express  from "express";
import { addOrder, myOrders } from "../Controllers/OrderController.js";


let OrderRouter = express.Router();

OrderRouter.route("/addorder").post(addOrder);
OrderRouter.route("/myorders").get(myOrders);

export { OrderRouter };


