const auth=(req,res,next)=>{
    res.status(200).json({success:true,mesaj:"auth controller ok"});
};

const register = (req,res,next)=>{
    res.status(200).json({success:true,mesaj:"register ok"});
};

module.exports={auth,register};