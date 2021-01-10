const express=require("express");
const dotenv=require("dotenv");
const questions=require("./routers/question");
const auth=require("./routers/auth");

//enviroment variables
dotenv.config({
    path:"./config/env/config.env"
});
const app=express();

const PORT=process.env.PORT;

app.use("/api/questions",questions);
app.use("/api/auth",auth);


//Run the server
app.listen(PORT,()=>{
    console.log("app started on port : "+PORT+" Ortam : "+process.env.NODE_ENV);
});