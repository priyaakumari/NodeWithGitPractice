const express=require('express');

const router= express.Router();

//require home_controller exports objects
const homeController= require('../controllers/home_controllers');

console.log("router loaded");

//get action from controller home_controller.js file
router.get('/',homeController.home);
router.use('/users', require('./users'));

module.exports=router;