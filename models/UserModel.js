import mongoose, { Schema } from "mongoose";


let UserScehma = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: Number },
    role: {
        type: String,
        default: "user"
    }
})

let UserModel = mongoose.model("user", UserScehma);

export  {UserModel};
