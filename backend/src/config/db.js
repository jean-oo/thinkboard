import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECT SUCCESSFULLY")
    } catch(error){
        console.error("ERROR connecting to MONGODB", error)
        process.exit(1); // 1 means exits with failure 
    }
}