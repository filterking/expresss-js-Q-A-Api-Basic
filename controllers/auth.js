const User=require("../models/User");

const auth=(req,res,next)=>{
    res.status(200).json({success:true,mesaj:"auth controller ok"});
};

const register = async (req,res,next)=>{
    const name="Mustafa Kunter Kutlu";
    const email="kunter.kutlu@goldstore.com.tr";
    const password="1234567";
    const user=await User.create({
        name:name,
        email:email,
        password:password
    });
    res.status(200).json({success:true,data:user});
};

module.exports={auth,register};