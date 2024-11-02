import OrderModel from "../models/OrdersModel.js";


let addOrder = async (req, res) => { 
    console.log(req.body,"body addOrder");
    try {
        let order = await OrderModel.create(req.body)
        res.send({ order: order, status: "success" })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "something went wrong while adding order",
        })

    }
}


let myOrders = async (req, res) => {
    console.log(req.query, "body myOrders");
    try {
        let orders = await OrderModel.find({ userID: req.query.userID });
        res.send({ orders: orders, status: "success" });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "something went wrong while getting orders",
        });
    }
};


export { addOrder , myOrders}