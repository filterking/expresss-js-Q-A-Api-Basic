const express=require("express");
const dotenv=require("dotenv");
const routers=require("./routers");
const connectDatabase=require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
//enviroment variables
dotenv.config({
    path:"./config/env/config.env"
});

//Mongodb Database
connectDatabase();

const app=express();

const PORT=process.env.PORT;

app.use("/api",routers);
app.use(customErrorHandler);
//Run the server
app.listen(PORT,()=>{
    console.log("app started on port : "+PORT+" Ortam : "+process.env.NODE_ENV);
});