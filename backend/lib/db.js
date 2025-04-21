import mongoose from "mongoose";

export const connectDB = async()=>{
try {
   const conn = await mongoose.connect(process.env.MONGO_URI);
   console.log(`MongoDb connected: ${conn.connection.host}`);
}
catch(err){
    console.log("Error Connecting to MongoDB", err);
    process.exit(1);

}
}