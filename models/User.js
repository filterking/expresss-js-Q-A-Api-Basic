const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please Prpvide a name"]
    },
    email:{
        type:String,
        required:[true,"Please provide an email address"],
        unique:[true,"This email address hass been taken before"],
        match:[
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email address"
        ]
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
        minlength:[6,"please provide a password with min length 6"],
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    place:{
        type:String
    },
    website:{
        type:String
    },
    profile_image:{
        type:String,
        default:"default.jpg"
    },
    blocked:{
        type:Boolean,
        default:false
    }

});

module.exports=mongoose.model("User",UserSchema);