var express=require('express')
var  app=express()

//配置HTML模板引擎
var ejs=require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

//配置获取post参数的中间件
app.use(express.json())

app.use(express.urlencoded({extended:true}))


//配置静态资源目录  内置中间件
app.use(express.static('static'))



//配置ejs模板引擎
// app.set('view engine','ejs')

//---------应用级中间件-----start
app.use((req,res,next)=>{
    console.log(new Date())
    next()
})
//---------应用级中间件-----end


//---------路由级中间件-----start
//
app.get('/news/add',(req,res,next)=>{//不执行响应执行next的路由
    console.log('路由中间件')
    next()
})
//---------路由级中间件-----end



app.get('/news/:id',(req,res)=>{
    res.render('index.html',{
        title:'新闻',
        hv:"<h3>新闻id："+req.params['id']+"</h3>",
        flag:true
    })
})


app.get('/data',(req,res)=>{
    res.render('index.html',{
        title:'你好',
        hv:"<h3>666666666666666111</h3>",
        flag:true
    })
})

app.post('/data',(req,res)=>{
    console.log(req.body)
    res.send(res.body)
})


//---------错误处理-----start
app.use((req,res,next)=>{
    res.status(404).send('404')
})
//---------错误处理-----end

app.listen(3003)