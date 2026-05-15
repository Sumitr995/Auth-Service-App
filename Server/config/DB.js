import mongoose from 'mongoose';

const ConnectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("DataBase is Connected!! 😁");
    })
    await mongoose.connect(process.env.MONGODB_URI)
};

export default ConnectDB;