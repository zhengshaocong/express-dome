const express=require('express')
var router=express.Router()


router.get('/',(req,res)=>{
    res.send('登陆界面')
})

router.post('/login',(req,res)=>{
    res.send('执行登陆')
})


module.exports=router