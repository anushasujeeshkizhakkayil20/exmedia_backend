//import dotenv
require('dotenv').config()

//2)import express
const express = require('express')

//3)import cors
const cors = require('cors')

//4)create server
const exServer = express()

//5)use of cors by server
exServer.use(cors())

//import router
const router = require('./Routing/router')

//import connection.js
require('./DB/coonection')

//6)parsing json
exServer.use(express.json())

//server using router
exServer.use(router)

//7)customize port
const PORT = 4023 || process.env

//8)run server
exServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORTNUMBR ${PORT}`);
})

//get request
exServer.get('/',(req,res)=>{
    res.send('<h1 style="color:red">exserver running successfully  and ready accept client request</h1>')
})

//post  request
exServer.post('/',(req,res)=>{
    res.send('post request')
})