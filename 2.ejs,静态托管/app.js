var express=require('express')

var  app=express()

//配置HTML模板引擎
var ejs=require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

//配置静态资源目录
app.use(express.static('static'))


//配置ejs模板引擎
// app.set('view engine','ejs')

app.get('/data',(req,res)=>{
    res.render('index.html',{
        title:'你好',
        hv:"<h3>666666666666666</h3>",
        flag:true
    })
})

// app.get('/data',(req,res)=>{
//     res.render('index.ejs',{
//         title:'你好',
//         hv:"<h3>666666666666666</h3>",
//         flag:true
//     })
// })

app.listen(3003)