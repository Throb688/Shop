module.exports = function(req,res,next){
    var url = req.url;
    console.log(req.session.id);
    if (!req.session.uid) {
        res.send('<script>alert("请先登录"); ;window.location.href="/" </script>')
    //   res.render('commen/error', { msg: '对不起，请登录个人信息，否则无法进入后台管理页面', time: 3000, url: '/login' });
      return;
    }
    next();
  }