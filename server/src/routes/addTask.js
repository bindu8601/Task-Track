const express=require('express')
const addTaskController=require('../controllers/addTask')
const addTaskRoute=express.Router()
addTaskRoute.post('/addTask',addTaskController)

module.exports =addTaskRoute