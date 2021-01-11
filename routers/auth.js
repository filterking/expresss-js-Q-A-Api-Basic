const express=require("express");
const router=express.Router();
const {auth, register, errorTest}=require("../controllers/auth");

router.get("/",auth);

router.post("/register",register);
router.get("/error",errorTest);
module.exports=router;