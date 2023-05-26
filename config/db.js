import mongoose from 'mongoose'
import colors from 'colors'
const connectDB= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log(`connect to mongo database ${conn.connection.host}`.bgYellow.white);
    } catch(error)
    {
       console.log(`error in mongoDB ${error}`.bgRed.white); 
    }
}
export default connectDB;