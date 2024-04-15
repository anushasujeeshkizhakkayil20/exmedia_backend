//import mongoose
const mongoose = require('mongoose')

//schema-used to mongoose
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 characters , but got {VALUE}']
    },
    email:{
       type:String,
       require: true,
       unique:true,
       validator(value){
        if(!validator.isEmail(value)){
            throw new Error('invalid email')
        }
       }
    },
    password:{
        type:String,
        require:true
    }
})


//create model
const users = mongoose.model("users",userSchema)

//export modeel
module.exports = users
