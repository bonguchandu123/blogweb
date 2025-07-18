import mongoose from "mongoose";


export const ConnectDB  = async() => {
    await mongoose.connect(process.MONGODB_URL)
    console.log("DB Connected")
}