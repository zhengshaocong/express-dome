var express=require('express')
var app=express() 


//引入外部模块
const admin=require('./routes/admin.js')
const api=require('./routes/api.js')
const index=require('./routes/index.js')


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



//挂载

app.use('/admin',admin)
app.use('/api',api)
app.use('/',index)



//---------错误处理-----start
app.use((req,res,next)=>{
    res.status(404).send('404')
})
//---------错误处理-----end

app.listen(80)