const mongoose = require("mongoose");
const connectDB = async()=>{
try{
    await mongoose.connect(process.env.MONGO_URI);
}
catch(err){
    console.error("Mongo Error",err);
    process.exit(1);
}
};
module.exports = connectDB;