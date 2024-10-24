import ProductModel from "../models/ProductModel.js";

let getproducts = async (req, res) => {
    console.log(req.body, "body getproducts");
    try {
        let products = await ProductModel.find();
        res.send({ products: products, status: "success" });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

export { getproducts }