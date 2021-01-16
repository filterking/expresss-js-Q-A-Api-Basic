const CustomError = require("../../helpers/errors/CustomError");
const customErrorHandler = (err,req,res,next)=>{
    let customError=err;

    res.status(customError.status || 500).json({success:false,message:customError.message || "internal Server Error"});
};

module.exports = customErrorHandler;