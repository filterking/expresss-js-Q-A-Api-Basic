const customErrorHandler = (err,req,res,next)=>{
console.log("custom error hanfler");
res.status(400).json({success:false,message:err.message});
};

module.exports = customErrorHandler;