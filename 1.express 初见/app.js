var express=require('express')

var  app=express()

app.get('/data',(req,res)=>{
    console.log(req.query)
    res.send('获取')
})

app.post('/data',(req,res)=>{
    res.send('传输')
})

app.put('/data',(req,res)=>{
    res.send('修改')
})


app.delete('/data',(req,res)=>{
    res.send('删除')
})

app.get('/news/:id',(req,res)=>{
    let id=req.params['id']
    res.send(id)
})

app.listen(3000)