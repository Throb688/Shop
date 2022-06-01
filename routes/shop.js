var express = require('express');
var router = express.Router();
let db = require('../until/mysql');
var sd = require('silly-datetime');


let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
let user_id 

router.get('/',(req,res)=>{
     user_id = req.params.id
    let sql = 'SELECT * FROM shop where type = 1';
    let sql1 = 'SELECT * FROM shop where type = 2';
    let sql2 = 'SELECT * FROM shop where type = 3';
    db.query(`select * from users where user_name = '${req.session.userName}'`,(err,reesult) =>{
      if(err) throw err;
      user_id = reesult[0].id
      console.log("成功");
    })
    
   db.query(sql,(err,result1)=>{
      if(err) throw err;
    db.query(sql1,(err,result2) =>{
      if(err) throw err;
      db.query(sql2,(err,result3) =>{
        if(err) throw err;
      res.render('index3',{shop:result1,shope:result2,shope1:result3,use:req.session.userName})  
    })
})
   })
})

router.get('/logout',(req,res) =>{
  req.session.uid = null;
  req.session.userName= null;
  res.send('<script>alert("成功退出"); location.href="/"</script>')
})

router.get('/single/:id',(req,res) =>{
  let id = req.params.id 
    let sql = 'SELECT e.`name`,e.image,e.ori_price,e.price,a.shop_text FROM shop e INNER JOIN shop1 a on e.id = a.shop_id where a.id = '+req.params.id+'';
    let sql1 = 'SELECT * FROM shop where type = 3';
    db.query(sql,(err,result)=>{
        if(err) throw err;
    db.query(sql1,(err,result2) =>{
        if(err) throw err;
        res.render('single',{shop:result,shope:result2,use:req.session.userName,shopId:id}) 
    }) 
  })
})

router.get('/contact',(req,res) =>{
  res.render('contact',{use:req.session.userName})
})

router.post('/suggest',(req,res) =>{
  let sql = `INSERT INTO SUGGEST(user_id,name,email,suggest,sumbit_time) VALUES('${user_id},${req.body.Name}','${req.body.Email}','${req.body.suggest}','${time}')`
  db.query(sql,(err,result) =>{
    if(err) throw err;
    let backstr = "<script>alert('提交成功');window.location.href='/shop/contact'</script>"
    res.setHeader('Content-type','text/html;charset=utf-8');
     res.end(backstr)
  })
})

router.get('/products',(req,res) =>{
   // 获取get后面的page参数值； 没有page的参数值的时候，给它默认值0
   let page=(req.query.page==undefined)?0:req.query.page;
   let startPage=page*9;

      // 从数据库获取数据，然后渲染到show页面x`
   let count='select count(*) as count from shop';
   let sql=`select * from shop  ORDER BY(id) DESC limit ${startPage},9 `;
 
   db.query(count,(err,result)=>{
     if(err) throw err;
       let countNum=result[0].count;
       console.log();
       db.query(sql,(err,result)=>{
         if(err) throw err;
         console.log(result);
           res.render('products',{shop:result,count:countNum,page:page,use:req.session.userName});
       })
   })
})


router.post('/sub/:id',(req,res) =>{
  let id = req.params.id
  db.query(`INSERT INTO demo(c_id,user_id) VALUES('${id}',${user_id})`,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.send('success')
  })
})

//页面搜索功能
router.post('/search',(req,res) =>{
  let mes = req.body.Search;
  console.log(mes);
  db.query(`SELECT * FROM SHOP WHERE NAME LIKE "%${mes}%"`,(err,results) =>{
    if(err) throw err;
    console.log(results);
    res.render('products',{shop:results,count:0,page:0,use:req.session.userName})
  })
})

module.exports = router;
