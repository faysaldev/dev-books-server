const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:'user',
    },
    photoURL:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    products:[{
        type:mongoose.Types.ObjectId,
        ref:"Product",
    }],
    carts:[{
        trype:mongoose.Types.ObjectId,
        ref:'Cart'
    }],
},{timestamps:true});

const User =mongoose.model('User',userSchema);

module.exports =User;