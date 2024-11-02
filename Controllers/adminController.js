import { UserModel } from "../models/UserModel.js";
import ProductModel from "../models/ProductModel.js";

let addproduct = async (req, res) => {
 
  try {
    let product = await ProductModel.create(req.body);
    res.send({ product: product, status: "success" });
  } catch (error) {
    console.log(error);
      res.send({
        status: "failed",
        message: "something went wrong while adding product",
    });
  }
};


let getproducts = async (req, res) => {
  try {
    let products = await ProductModel.find();
    res.send({ products: products, status: "success" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

let getusers = async (req, res) => {
  try {
    let users = await UserModel.find();
    res.send({ users: users, status: "success" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};



let deleteProduct = async (req, res) => { 
  let  deletedProduct = await ProductModel.findOneAndDelete({id: req.params.id})
  if (deletedProduct) {
    res.send({ status: "success",message: "product deleted successfully" });
  } else {
    res.send({ status: "failed",message: "product not found" });
  }
  
}


let editProduct = async (req, res) => {
  
  // let updatedProduct = await ProductModel.updateOne({id: req.params.id}, req.body)
  let updatedProduct = await ProductModel.updateOne(
    { _id: req.query.id },
    req.body
  );

  if (updatedProduct) {
    res.send({ status: "success",message: "product updated successfully" });
  } else {
    res.send({ status: "failed",message: "product not found" });
  }
}

export { addproduct , getusers , getproducts, deleteProduct , editProduct};
