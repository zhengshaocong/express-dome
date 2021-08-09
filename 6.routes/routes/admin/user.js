const express=require('express')
var router=express.Router()


router.get('/',(req,res)=>{
    res.send('用户列表')
})

router.post('/add',(req,res)=>{
    res.send('增加用户')
})

router.post('/edit',(req,res)=>{
    res.send('修改用户')
})


router.delete('/delete',(req,res)=>{
    res.send('删除用户')
})

module.exports=router