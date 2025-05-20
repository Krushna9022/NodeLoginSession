const express=require('express');
const router=express.Router();
const userController=require("../controllers/register.controller");
const navController=require('../controllers/nav.controller')

router.post("/register",userController.registerUser)
router.post("/validate",userController.ValidateUser)
router.get('/',navController.navbar)
router.get('/signup',navController.singup)
router.get('/signin',navController.signin)
router.get('/updateProfile',userController.viewProfiledetail)
router.post('/updateprofile',userController.updateProfile)
router.get("/logout",userController.logoutUser)
module.exports=router;



