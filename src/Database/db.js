const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL, ()=>{
        console.log("connected to the MongoDB");
    });
};

module.exports= connectDB;