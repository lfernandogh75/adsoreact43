const express= require("express");
const {createProduct,getProducts}= require("../controllers/productController");
const upload = require("../middlewares/upload");
const router = express.Router();
router.post("/",upload.single("photoName"), createProduct);
router.get("/",getProducts);
module.exports = router;