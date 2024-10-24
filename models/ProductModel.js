import { Schema,model  } from "mongoose";


let PorductSchema = new Schema({
    name: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
    description: { type: "string" },
    stock: { type: "number" }
});

let ProductModel = model("product", PorductSchema);

export default ProductModel;