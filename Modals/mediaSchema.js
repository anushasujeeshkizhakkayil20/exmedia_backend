//import mongoose
const mongoose = require('mongoose')

//schema-used to mongoose
const mediaSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 characters , but got {VALUE}']
    },
    sname:{
        type:String,
        require:true,
        
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
    message:{
        type:String,
        require:true
    }
})


//create model
const medias = mongoose.model("medias",mediaSchema)

//export modeel
module.exports = medias
