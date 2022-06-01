var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session=require("express-session");
var flash = require('connect-flash');
var login = require('./until/login')




var indexRouter = require('./routes/index');
var manageRouter = require('./routes/manage');
var shopRouter = require('./routes/shop');
var gouRouter = require('./routes/gou')
var myselfRouter = require('./routes/myself')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret:"dsafsafsf", //设置签名秘钥 内容可以任意填写
//   cookie:{ maxAge:60*1000*10*60*24 }, //设置cookie的过期时间，例：80s后    session和相应的cookie失效过期
//   resave:false, //强制保存，如果session没有被修改也要重新保存
//   name: 'luyao',
//   saveUninitialized:false //如果原先没有session那么久设置，否则不设置
// }));

app.use(session({
  secret: 'bitiancanshu',
  // 以下是选填参数，但是不填会提示警告 start
  resave: false,
  saveUninitialized: true,
    //  设置connect.sid  
  name: 'aaa',
  // 设置生命周期
  cookie: { maxAge: 60000000 },
}))

app.use(flash());

app.use('/', indexRouter);
app.use('/manage', manageRouter);
app.use(login)
app.use('/shop', shopRouter);
app.use('/gou',gouRouter)
app.use('/myself',myselfRouter)


process.on("exit",function(code){
  console.log(1);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  console.log("错误："+err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
