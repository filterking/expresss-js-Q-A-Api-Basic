const express=require("express");
const dotenv=require("dotenv");
const routers=require("./routers");
const connectDatabase=require("./helpers/database/connectDatabase");
//enviroment variables
dotenv.config({
    path:"./config/env/config.env"
});

//Mongodb Database
connectDatabase();

const app=express();

const PORT=process.env.PORT;

app.use("/api",routers);

//Run the server
app.listen(PORT,()=>{
    console.log("app started on port : "+PORT+" Ortam : "+process.env.NODE_ENV);
});