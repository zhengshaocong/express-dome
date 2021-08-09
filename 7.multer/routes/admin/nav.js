const express=require('express')
var router=express.Router()
const tools=require('../../models/tools.js')

router.get('/',(req,res)=>{
    res.send('导航列表')
})

router.get('/add',(req,res)=>{
    res.render("admin/nav/add")
})

router.post('/add',tools.upload.single('pic'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send({
        name:'增加导航',
        body:req.body,
        file:req.file
    })
})


router.post('/edit',(req,res)=>{
    res.send('修改导航')
})


router.delete('/delete',(req,res)=>{
    res.send('删除导航')
})

module.exports=router