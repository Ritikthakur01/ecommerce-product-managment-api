const mongoose =require("mongoose");

// below function is for creating connection with mongodb
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_api_db');
}

//handelling promise
main().then(function(data){
    console.log("Successfully connected with mongodb!!!")
    return
}).catch(err=>{
    if(err){
        console.log(`error on creating connection with mongodb :- ${err}`);
        return;
    }
})

