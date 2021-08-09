const express=require('express')
var router=express.Router()
const tools=require('../../models/tools.js')

router.get('/',(req,res)=>{
    res.send('用户列表')
})


router.get('/add',(req,res)=>{
    res.render("admin/user/add")
})

var cpUploads=tools.upload.fields([{name:'pic1',maxCount:1},{name:'pic2',maxCount:1}])
console.log(cpUploads)
router.post('/add',cpUploads,(req,res)=>{
    // console.log(req.body)
    // console.log(req.files)
    res.send({
        name:'增加用户',
        body:req.body,
        files:req.files
    })
})

router.post('/edit',(req,res)=>{
    res.send('修改用户')
})


router.delete('/delete',(req,res)=>{
    res.send('删除用户')
})

module.exports=router