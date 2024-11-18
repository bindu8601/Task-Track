const express=require('express')

const registerController=require('../controllers/registerController')
const registerRoute=express.Router();
registerRoute.post('/register',registerController.registerController)
module.exports=registerRoute