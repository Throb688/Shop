var express = require('express');
var router = express.Router();
var sd = require('silly-datetime');
let User = require('../mould/user')
let db = require('../until/mysql');
let md5password = require('../until/crypto');
let sendEmail = require('../until/sendEmail');
let gettoken = require('../until/token')
const log4js = require('../until/log4j'); // 引入库
const logger = log4js.getLogger('datelog'); // 获取指定的输出源




let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')

router.get('/', function(req, res, next) {
  res.render('index');
});

router.put('/:id',(req,res)=>{
  let code = sendEmail(req.params.id)
  req.session.code= code;
  res.send(code)
})


router.post('/',(req,res,next) =>{
  let pas = md5password(req.body.paw1)
  let code = req.body.code1;
  if(code == req.session.code){
  let sql1 = `SELECT * FROM users where user_name = "${req.body.name}" `
  db.query(sql1,(err,resu)=>{
    if(resu ==""){
      let sql = `insert into users(user_name,password,create_time) values('${req.body.name}','${pas}','${time}')`
      db.query(sql,(err,result) =>{
      if(err){
        console.log(err);
      }else{
      logger.info('用户---'+req.body.name+"---注册");
      res.render('404',{
        title:"注册成功",
        message:'3秒后返回'
        })
      }
     })
    }else{
      // let backstr = "<script>>alert('验证码错误');window.location.href="/"</script>"
      // res.setHeader('Content-type','text/html;charset=utf-8');
      // res.end(backstr)
      res.send(`<script>alert("用户名已经存在，请重新注册,3秒后返回"); setTimeout(function(){location.href="/"},3000) </script>`)
    }
  })
}else{
  let backstr = "<script>>alert('验证码错误');window.location.href="/"</script>"
  res.setHeader('Content-type','text/html;charset=utf-8');
  res.end(backstr)
  // res.send('<script>alert("验证码错误，3秒后返回"); setTimeout(function(){location.href="/"},3000) </script>')
}
})


router.post('/user',async (req,res) =>{
  let code = 1
  let user= new User(req.body.name1,md5password(req.body.paw))
  console.log(user.name+user.password);
  console.log(req.body.name1,md5password(req.body.paw));
  let sql = 'SELECT * FROM users where user_name ="'+user.name+'" and password = "'+user.password+'"';
  db.query(sql,(err,result)=>{
    console.log(result);
    if(err){
      throw err;
    }else if(result == ""){
      res.render('404',{
        title:"登入失败",
        message:'3秒后返回'
      })
    }else{
      // res.send(`<script>alert("${code}"); alert("用户名已经存在，请重新注册,3秒后返回"); setTimeout(function(){${code = null}},3000) ;alert("${code}");alert("${code}") </script>`)
      logger.info('用户---'+user.name+"---登录");
      req.session.uid = result[0].id;
     req.session.userName= user.name;
     res.redirect('/shop')
  }
  })
})


module.exports = router;
