//to set up the path

//import express
const express = require('express')

//import controoler
const userController =require('../Controller/userController')

//import mediacontroller
const mediacontroller =require('../Controller/mediaController')

//2)create an obj for router class in the express module
const  router = new express.Router

//3)logic path
//a)register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)
//add media
router.post('/contact/add',mediacontroller.addcontact)

//get media
router.get('/media/get',mediacontroller.getmediaproject)

//4)export router
module.exports =router

