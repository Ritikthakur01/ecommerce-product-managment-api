const express=require("express");
const app= express();
const port= 8000;

const db= require("./config/mongoose");

const Product= require("./model/product");

//for recognizing data that is coming from request object (req.body) as string and array. ,specially for POST and PUT method
app.use(express.urlencoded())

app.use("/",require("./routes"))

// set view engine as ejs and path as ./views
app.set("view engine","ejs");
app.set("views","./views")

//for running server at the given port
app.listen(port,(err)=>{
    if(err){
        console.log("error on creating server",err);
    }
    console.log(`Server is running at port ${port}` )
});
