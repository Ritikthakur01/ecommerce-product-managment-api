const mongoose=require("mongoose");
const product_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
},
    {timestamps:true}
)

// defining model name with its schema
const Product = mongoose.model("Product",product_Schema);

module.exports = Product;
