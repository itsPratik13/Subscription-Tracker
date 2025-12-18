import mongoose from "mongoose";

import { DB_URI } from "../env.js";
if(!DB_URI){
    throw new Error("Database url is not defined as environemt variable ")
}

const connectDB=async ()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log("database connected")
        
    } catch (error) {
        console.log("error is ",error);
        process.exit(1);
        
    }
}
export default connectDB