const express=require("express");
const dotenv=require("dotenv");

//enviroment variables
dotenv.config({
    path:"./config/env/config.env"
});
const app=express();

const PORT=process.env.PORT;

app.get("/",(req,res,next)=>{
    res.send("Hello Q-A-Response s");
});

//Run the server
app.listen(PORT,()=>{
    console.log("app started on port : "+PORT+" Ortam : "+process.env.NODE_ENV);
});