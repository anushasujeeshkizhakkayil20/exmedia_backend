//import mongoose
const mongoose = require('mongoose')

//get a coonection string
const connectionString = process.env.DATABASE
// console.log(connectionString);

//connect node.js //with mongose
mongoose.connect(connectionString).then(()=>{
    console.log('server connected succesfully with mongodb');
}).catch((err)=>{
    console.log(`something went wrong ERROR :${err}`);
})