
//import model
const medias= require('../Modals/mediaSchema')

//import jwt
const jwt =require('jsonwebtoken')


 //logic for register
 exports.addcontact =async(req,res)=>{
    console.log('inside the controller register function');
      //extract data from reqbody-convert json data into javascript object
      const{name,sname,email,message} = req.body
        try {const existingUser =  await medias.findOne({email})
           if(existingUser){
            res.status(406).json('added  correctly')
           }
           else{
               //create an object for the model
               const newUser = new medias({
                name,
                sname,
                email,
                message
               })
               //permentely saved to to mongodb atlas
               newUser.save()
             //response
            res.status(200).json(newUser)
           }}
           catch(err){
          res.status(401).json(`message request failed due to,${err}`);
           }
    }

    //get media
    exports.getmediaproject = async(req,res)=>{
      try {
        const getmedia = await medias.find()
      res.status(200).json(getmedia)
      } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
      }
    }