import CartModel from "../models/CartModel.js";



let addToCart = async (req, res) => { 
    try {
        let cartExist = await CartModel.findOne({userId: req.body.userId})
        if (cartExist) {
            cartExist.cartItems = req.body.cartItems; 
            cartExist.totalItems = req.body.totalItems; 
            cartExist.cartTotal = req.body.cartTotal;
            cartExist.save()
            res.send({ status: "success", message: "product added to cart" })
        } else {
            let cart = await CartModel.create(req.body)
            res.send({ status: "success", message: "product added to cart" })
        }
    } catch (error) {
        res.send({message:"something went wrong",status:"failed"})
    }
}


let getCart = async (req, res) => {
    try {
        let cart = await CartModel.findOne({ userId: req.query.userId })
        res.send({ cart: cart, status: "success" })
    } catch (error) {
        res.send({message:"something went wrong",status:"failed"})
    }
 }

export { addToCart  , getCart}