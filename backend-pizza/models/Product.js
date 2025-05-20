const mongoose = require("mongoose");
const ProductSchema= new mongoose.Schema({
    name:{type:String, required: true,unique:true},
    ingredients:{type:String, required: true},
    price:{type:Number, required: true},
    photoName:{type:String, required: true},
    soldOut:{type:Boolean, default:false},
    createdAt:{type:Date,default:Date.now},
});
module.exports = mongoose.model("Product",ProductSchema);