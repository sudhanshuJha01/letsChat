import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function connectDB(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("DataBase is connected bro");
    } catch (error) {   
        console.log(error)
    }
}   

export default connectDB;