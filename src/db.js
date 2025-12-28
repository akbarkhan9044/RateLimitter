import mongoose from "mongoose";

const connectDatabase=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Databse has been connected ${connection.connection.host}`);
    }catch(error){
        console.log("Error while connecting with Database");
    }
}

export default connectDatabase;