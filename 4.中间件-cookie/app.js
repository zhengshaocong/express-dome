var express=require('express')
var  app=express()

//配置HTML模板引擎
var ejs=require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

//配置获取post参数的中间件
app.use(express.json())

app.use(express.urlencoded({extended:false}))


//配置获取cookie中间件
var cookieParser=require('cookie-parser')
app.use(cookieParser('aksdnakj354654654'))//signed需要的加密字段 

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




app.get('/',(req,res)=>{//不执行响应执行next的路由
    // res.cookie('username','zhang',{maxAge:1000*60*60})
    // res.cookie('username','zhang',{maxAge:1000*60*60,httpOnly:true})//只能由请求获取cookie 浏览器获取不了
    // res.cookie('username','zhang',{maxAge:1000*60*60,path:'/aavv'})//设置cookie的作用域 设置哪些路由能用
    // res.cookie('username','zhang',{maxAge:1000*60*60,domain:'.bb.com'})//设置cookie的作用域 多域名共享

    res.cookie('username',{zhang:12312313},{maxAge:1000*60*60,signed:true})//加密 签名  注意 想要加密需要在cookie-parser中间件挂载的时候添加加密秘钥 
    res.send('你好 cookie')
})

app.get('/getcookie',(req,res)=>{//不执行响应执行next的路由
    let username=req.cookies.username//普通cookie
    let usernameSigned=req.signedCookies.username//加密cookie
    console.log()
    res.send('获取cookie---'+username+'</br>获取加密cookie---'+usernameSigned)
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

app.listen(80)