import mongoose from "mongoose";


export const ConnectDB  = async() => {
    await mongoose.connect('mongodb+srv://chandubongu:chandu@123@cluster0.takuw.mongodb.net/nextapp')
    console.log("DB Connected")
}