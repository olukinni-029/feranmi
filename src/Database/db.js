const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGOBD_URL, ()=>{
        console.log("connected to the MongoDB");
    });
};

module.exports= connectDB;