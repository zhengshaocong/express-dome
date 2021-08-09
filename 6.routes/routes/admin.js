const express=require('express')
var router=express.Router()

var user=require("./admin/user.js")
var login=require("./admin/login.js")
var nav=require("./admin/nav.js")

router.get('/',(req,res)=>{
    res.send('admin')
})
router.use('/user',user)
router.use('/login',login)
router.use('/nav',nav)
module.exports=router