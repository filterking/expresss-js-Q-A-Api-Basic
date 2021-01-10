const express=require("express");
const router=express.Router();
const {auth, register}=require("../controllers/auth");

router.get("/",auth);

router.post("/register",register);

module.exports=router;