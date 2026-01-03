import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

let isConnected = false

const connectDB = async () => {
    if (isConnected) {
        console.log("Already connected");
        return;
    }
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`MONGO Connect to ${connectionInstance.connection.host}`);
        isConnected = true
        
    } catch (error) {
        console.log("mongoose connection error: " , error);
        process.exit(1);
    }
}

export default connectDB