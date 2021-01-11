const User=require("../models/User");
const CustomError=require("../helpers/errors/CustomError");
const auth=(req,res,next)=>{
    res.status(200).json({success:true,mesaj:"auth controller ok"});
};

const register = async (req,res,next)=>{
    const name="Mustafa Kunter Kutlu";
    const email="kunterkdutlu@goldstsore.com.tr";
    const password="12";
    try{
        const user=await User.create({
            name:name,
            email:email,
            password:password
        });
        res.status(200).json({success:true,data:user});
    }catch(err){
        return next(err);
    }

};
    



const errorTest = (req,res,next)=>{
    return next(new CustomError("Custom Error Message",400));
};

module.exports={auth,register,errorTest};