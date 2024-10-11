import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DataBase is connected bro");
    } catch (error) {   
        console.log(`error in database connection ${error}`)
    }
}   

export default connectDB;