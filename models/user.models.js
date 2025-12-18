import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Username is required"],
        minLength:2,
        maxLength:50
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
          ]

    },

    password:{
        type:String,
        required:[true,"password is required"],
        minLength:6

    }
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;

