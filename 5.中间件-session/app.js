var express=require('express')
var app=express() 

//配置获取session中间件
var session=require('express-session')

//使用mongodb储存session
var MongoStore= require('connect-mongo')

app.use(session({
    secret:'asdadadadasd',//生成sissen的签名 随意写
    resave:false,//强制保存， session 即使session没有变化
    saveUninitialized:true,//强制将为初始化的session存储
    cookie:{
        maxAge:1000*60,
        secure:false//表示只支持https协议
    },
    rolling:true,//在过期时间内发送请求会自动增加过期时间，若在过期时间后，则无效
    store:MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/shop',
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default 若不改变session 则每24小时更新一次
    })
}))



//配置HTML模板引擎
var ejs=require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

//配置获取post参数的中间件
app.use(express.json())

app.use(express.urlencoded({extended:false}))


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
    req.session.username='666666'
    res.send('你好 session')
})

app.get('/getsession',(req,res)=>{//不执行响应执行next的路由
    console.log(1213131)
    res.send('获取session---'+req.session.username)
})

app.get('/closesession',(req,res)=>{//不执行响应执行next的路由
    // req.session.cookie.maxAge=0//将存储session的cookie储存时间改为0  但是会把所有session都销毁
    // req.session.username=''//指定清除 req.session.【cookieName】=''
    req.session.destroy()//清除所有
    res.send('删除session')
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