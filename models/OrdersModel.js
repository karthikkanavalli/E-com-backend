import {  Schema,model} from "mongoose";



let OrderSchema = new Schema({
  userID: { type: "string" },
  items: { type: "array" },
  address: { type: "string" },
  totalItems: { type: "number" },
  totalItemsCount: { type: "number" },
  cartTotal: { type: "number" },
    status: { default: "pending", type: "string" },
    date: {
      type: Date,
      default: Date.now
    
  }
});

let OrderModel = model("order", OrderSchema);

export default OrderModel