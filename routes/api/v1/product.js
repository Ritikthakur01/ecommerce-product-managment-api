const express= require("express");
const router = express.Router();

const product_cnt=require("../../../controllers/api/product")

router.get("/",product_cnt.products)

router.post("/create",product_cnt.create)

// using params
router.delete("/:id",product_cnt.delete)

//using query params here
router.post("/:id/update_quantity/",product_cnt.update)

module.exports= router;