const express= require("express");
const router = express.Router();

const home_cnt= require("../controllers/home")

router.get("/",home_cnt.home)

router.use("/api",require("./api"))

module.exports= router;