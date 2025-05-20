require("dotenv").config();
const express= require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes= require("./routes/productRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/images",express.static("public/images"));
app.use("/api/products",productRoutes);
const PORT = process.env.PORT||5000;
connectDB().then(()=>{
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
});
