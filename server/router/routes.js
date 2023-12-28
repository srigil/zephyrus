const express=require('express')
var router=express.Router()

const {show,userreg,userlog,task,DeleteTask}=require('../controller/services')
router.route("/show").get(show)
router.route("/userreg").post(userreg)
router.route("/userlog").post(userlog)
router.route("/todo").post(task)
router.route("/del").get(DeleteTask)
module.exports=router