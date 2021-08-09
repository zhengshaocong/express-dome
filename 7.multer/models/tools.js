var path =require('path')
var multer=require('multer')
var sd=require('silly-datetime')
let mkdirp=require('mkdirp')
var storage = multer.diskStorage({
    //配置上传目录
    destination: async function (req, file, cb) {
      let day=sd.format(new Date,"YYYYMMDD")
      let dir=path.join('static/uploads',day)
      await mkdirp(dir)
      cb(null, dir)
    },
    // 配置上传后的文件名
    filename: function (req, file, cb) {
      //获取后缀名
      let extname=path.extname(file.originalname)
      cb(null, file.fieldname + '-' + Date.now()+extname)
    }
  })
  
var upload = multer({ storage: storage })


var tools={
    upload
}
module.exports=tools