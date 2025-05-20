const Product = require("../models/Product");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
exports.createProduct = async (req,res)=>{
    
    try{
        const{name,ingredients,price}=req.body;
        const image = req.file;
      
        const optimizedImage = await sharp(image.buffer)
        .resize(800,800)
        .jpeg({quality:80})
        .toBuffer();
        const imageName=name;
        const imagePath = path.join(__dirname,"../public/images",imageName);
        fs.writeFileSync(imagePath,optimizedImage);
        const product = new Product({
            name,
            ingredients,
            price,
            photoName:`/images/${imageName}`
        });
        await product.save();
        res.status(201).json(product);
    }catch(err){
          res.status(500).json({error:err.message});
    }
};
exports.getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
         res.status(500).json({error:err.message});
    }
    };
