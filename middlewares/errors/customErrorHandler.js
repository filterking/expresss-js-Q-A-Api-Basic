const CustomError = require("../../helpers/errors/CustomError");
const customErrorHandler = (err,req,res,next)=>{
    let customError=err;
    if(err.name==="syntaxError"){
        customError= new CustomError("unexpected syntax",400);
    }
    res.status(customError.status || 500).json({success:false,message:customError.message || "internal Server Error"});
};

module.exports = customErrorHandler;