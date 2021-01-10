const express=require("express");
const dotenv=require("dotenv");
const routers=require("./routers");

//enviroment variables
dotenv.config({
    path:"./config/env/config.env"
});
const app=express();

const PORT=process.env.PORT;

app.use("/api",routers);

//Run the server
app.listen(PORT,()=>{
    console.log("app started on port : "+PORT+" Ortam : "+process.env.NODE_ENV);
});