import { Schema, model } from "mongoose";

let CartSchema = new Schema({
  userId: { type: "string" },
  cartItems: { type: "array" },
  totalItems: { type: "number" },
  cartTotal: { type: "number" },
});

let CartModel = model("cart", CartSchema);

export default CartModel;
