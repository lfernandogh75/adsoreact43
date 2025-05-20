const multer =require("multer");
const upload=multer({
    storage:multer.memoryStorage(),
    limits:{fieldSize:5*1024*1024},
    fileFilter:(req,file,cb)=>{
        if(file.mimetype.startsWith("image/")) cb(null,true);
        else cb(new Error("solo imagenes"),false);
    },
});
module.exports = upload;
