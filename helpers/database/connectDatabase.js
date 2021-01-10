const mongoose=require("mongoose");

const connectDatabase=()=>{
    //ek parametreler olmadan da çalışıyor ancak, hata mesajlarını yok ediyor bu ayarlar
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useFindAndModify:false, useCreateIndex:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Mongodb Connection Successfull");
    })
    .catch(err=>{
        console.error(err);
    });
}

module.exports=connectDatabase;