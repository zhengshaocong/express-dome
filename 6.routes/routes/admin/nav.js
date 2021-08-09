const express=require('express')
var router=express.Router()


router.get('/',(req,res)=>{
    res.send('导航列表')
})

router.post('/add',(req,res)=>{
    res.send('增加导航')
})

router.post('/edit',(req,res)=>{
    res.send('修改导航')
})


router.delete('/delete',(req,res)=>{
    res.send('删除导航')
})

module.exports=router