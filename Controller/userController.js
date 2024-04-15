//LOGic to resolve the request

//import model
const users = require('../Modals/userSchema')

//import jwt
const jwt =require('jsonwebtoken')


 //logic for register
exports.register =async(req,res)=>{
    console.log('inside the controller register function');
      //extract data from reqbody-convert json data into javascript object
      const{username,email,password} = req.body
        try {const existUser =  await users.findOne({email})
           if(existUser){
            res.status(406).json('Account Already Exist')
           }
           else{
               //create an object for the model
               const newUser = new users({
                username,
                email,
                password
               })
               //permentely saved to to mongodb atlas
               newUser.save()
             //response
            res.status(200).json(newUser)
           }}
           catch(err){
          res.status(401).json('Register request failed due to',err);
           }
    }

    //logic for login
    exports.login =async(req,res)=>{
        console.log('inside controller login for function');
        const{email,password} = req.body
   try {const existUser = await users.findOne({email,password})
    console.log(existUser);

    if(existUser){
      //generate token,unique id
      const token = jwt.sign({userId:existUser._id},"supersecretkey12345")


        res.status(200).json({
            existUser,
            token
        })
    }
    else{
        res.status(406).json('incorrect email or password')
    }
}
catch(err){
res.status(401).json(`login failed due to ${err}`)
}
    }