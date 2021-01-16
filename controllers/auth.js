const User=require("../models/User");
const CustomError=require("../helpers/errors/CustomError");
const asyncErrorWrapper=require("express-async-handler");
const auth=(req,res,next)=>{
    res.status(200).json({success:true,mesaj:"auth controller ok"});
};

const register = asyncErrorWrapper(async (req,res,next)=>{
       const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        });

    const token=user.generateJwtFromUser();
    console.log(token);
        res.status(200).json({success:true,data:user});


});
    



const errorTest = (req,res,next)=>{
    return next(new CustomError("Bilinmeyen Hata",400));
    //return ksdkfljsd;
};

module.exports={auth,register,errorTest};