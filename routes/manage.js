var express = require('express');
const { getLogger } = require('nodemailer/lib/shared');
var router = express.Router();
let db = require('../until/mysql');
var formidable = require('formidable');
var  path = require('path');
var fs = require('fs');
const { isUndefined } = require('util');
const { LOADIPHLPAPI } = require('dns');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index1')
});

router.post('/',(req,res) =>{
  let user={
    name: req.body.login,
    paw: req.body.pwd
  }
  console.log(user.name,user.paw);
  let sql = 'SELECT * FROM manage where user_name ="'+user.name+'" and password = "'+user.paw+'"';
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
    res.redirect('/manage/table')}
  })
})

router.get('/table',(req,res) =>{
  db.query('select count(*) as a from  suggest ',(err,result) =>{
    if(err) throw err;
    console.log(result[0]);
    res.render('table',{mes:result[0].a})
  })
}) 

// router.get('/depart',(req,res) =>{
//   let sql = 'SELECT * FROM SHOP ORDER BY(ID) DESC limit 0,7 '
//   db.query(sql,(err,result) =>{
//     if(err) throw err;
//     console.log(result);
//     res.render('depart',{shope:result})
//   })
// })


router.get('/table/:message',(req,res) =>{
  let mess = req.params.message
  let sql = `SELECT * FROM SHOP WHERE NAME  LIKE "%${mess}%"`
  db.query(sql,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.send(result)
  })
})

router.get('/addDepart',(req,res) =>{
  res.render('addDepart')
})


router.post('/insert',(req,res) =>{
  var form = formidable({
    multiples:true,
    uploadDir:path.join(__dirname,"../public/images",)
})
form.parse(req,(err,fields,files) =>{
    let newName = path.join(__dirname,"../public/images",Date.now()+path.extname(files.img.name));
fs.rename(
    files.img.path,
    newName,
    (err) =>{console.log(err);}
)
  let user ={
    'name' : fields.goodName,
    'goodplace': fields.goodPlace,
    'ori_price':parseFloat(fields.goodOri_price),
    'price':parseFloat(fields.price),
    'type':parseInt(fields.type)
  }
let str = newName.substring(newName.length-17)
console.log(newName.substring(newName.length-17));
let sql = `INSERT INTO SHOP(NAME,IMAGE,ORI_PRICE,PRICE,TYPE) VALUES('${user.name}','/images/${str}','${user.ori_price}','${user.price}','${user.type}')`
db.query(sql,(err,result)=>{
  if(err) throw err;
  console.log(result);
  res.redirect('/manage/depart')
})
})
})




router.delete('/table/del/:id',(req,res) =>{
  console.log(req.params.id)
  let sql = `DELETE FROM SHOP WHERE ID = ${req.params.id}`
  db.query(sql,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.send('success')
  })
})

router.get('/table/upd/:id',(req,res) =>{
  let sql = `SELECT * FROM SHOP WHERE ID =${req.params.id} `
  db.query(sql,(err,result) =>{
  if(err) throw err;
  console.log(result);
  res.render("update",{arr:result})
})
})

router.post('/update/:id',(req,res) =>{
  let user ={
    'name' : req.body.goodName,
    'goodplace': req.body.img,
    'ori_price':parseFloat(req.body.goodOri_price),
    'price':parseFloat(req.body.price),
    'type':parseInt(req.body.type)
  }
  let sql = `DELETE FROM SHOP WHERE ID = ${req.params.id} `
  db.query(sql,(err,result) =>{
    if(err) throw err;
    console.log(result);
    let sql1 = `INSERT INTO SHOP(ID,NAME,IMAGE,ORI_PRICE,PRICE,TYPE) VALUES(${req.params.id},'${user.name}','${user.goodplace}','${user.ori_price}','${user.price}','${user.type}')`
    db.query(sql1,(err,result) =>{
      if(err) throw err;
      console.log(result);
      res.redirect('/manage/depart')
    })
  })
})


router.get('/depart',(req,res)=>{
  // 获取get后面的page参数值； 没有page的参数值的时候，给它默认值0
  let page=(req.query.page==undefined)?0:req.query.page;
  let startPage=page*5;


  // 从数据库获取数据，然后渲染到show页面
  let count='select count(*) as count from shop';
  let sql=`select * from shop  ORDER BY(id) DESC limit ${startPage},5 `;

  db.query(count,(err,result)=>{
    if(err) throw err;
      let countNum=result[0].count;
      db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
          res.render('depart',{shope:result,count:countNum,page:page});
      })
  })
})

router.get('/user',(req,res)=>{
  let sql = `SELECT * FROM USERS`
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
          res.render('userTable',{shope:result});
      })
})

router.get('/user/:message',(req,res) =>{
  let mess = req.params.message
  let sql = `SELECT * FROM users WHERE user_name  LIKE "%${mess}%"`
  db.query(sql,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.send(result)
  })
})

router.get('/sug',(req,res) =>{
  db.query('select * from suggest',(err,result) =>{
    if(err) throw err;
    res.render('suggest',{suggest:result})
  })
})

router.get('/dispose/:id',(req,res)=>{
  let id =req.params.id;
  db.query(`delete from suggest where id = ${id}`,(err,result) =>{
    if(err) throw err;
    res.send('success')
  })
})

router.get('/order',(req,res) =>{
  let sql = 'SELECT p.name,p.price,b.user_name FROM shop  p INNER JOIN (SELECT t.use_id,u.user_name,t.tb_id FROM tb_shop t INNER JOIN users u ON t.use_id = u.id) AS b on p.id = b.tb_id'
  db.query(sql,(err,result) =>{
    if(err) throw err;
    res.render('order',{order:result})
  })
})

router.get("/saleroom",(req,res) =>{
  let sql = 'SELECT u.user_name,t.shop_Num,t.shop_money,t.shop_datatime from tb_shop1 t INNER JOIN users u on  t.user_id = u.id'
  db.query(sql,(err,result) =>{
    if(err) throw err;
    res.render("saleroom",{saleroom:result})
  })
})

module.exports = router;
