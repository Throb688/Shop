var express = require('express');
var router = express.Router();
let db = require('../until/mysql');
var sd = require('silly-datetime');
const log4js = require('../until/log4j'); // 引入库
const logger = log4js.getLogger('datelog'); // 获取指定的输出源
let user_id


router.get('/',(req,res) =>{ 
    db.query(`SELECT * FROM users where user_name = '${req.session.userName}'`,(err,result) =>{
        if(err) throw err;
        console.log(result);
    db.query(`SELECT * FROM demo1 where user_id = ${result[0].id}`,(err,result1)=>{
    if(err) throw err;
    console.log(result1);
    user_id = result[0].id
    res.render('gou',{shop:result1})
    })
})
})

router.delete('/del/:id',(req,res) =>{
    let id = req.params.id
    let sql = `DELETE FROM demo where c_id = ${id} and user_id = ${user_id}`
    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.send('success') 
    })
})

router.get('/scu/:moneyNum/:goodsNum',(req,res) =>{
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    let data = req.params
    console.log(data.moneyNum);
    db.query('INSERT INTO TB_SHOP1(user_id,shop_Num,shop_money,shop_datatime)  VALUES(?,?,?,?)',[user_id,parseFloat(data.goodsNum),parseFloat(data.moneyNum),time],(err,result2) =>{
        if(err) throw err;
        console.log(result2)
      db.query('INSERT INTO tb_shop(use_id,tb_name,tb_price,shop_image,tb_id) SELECT user_id,tb_name,tb_price,tb_image,tb_id FROM demo1',(err,result1) =>{
        if(err) throw err;
       db.query(`delete from demo where user_id = ${user_id}`,(err,result) =>{
        console.log(result);
        logger.info('用户id:'+user_id+",购买了"+data.goodsNum+",花费了"+data.moneyNum);
        if(err) throw err;
        res.send('success')  
        })
    })
    })
})

router.get('/case',(req,res) =>{
    let id = req.params.username;
    console.log("id"+id);  
    db.query(`SELECT * FROM users where user_name = '${id}'`,(err,result) =>{
        if(err) throw err;
        console.log(result);
        user_id1 = result[0].id
        console.log(user_id1);
        res.render('case',{data:result[0],userName:req.session.userName})
    })
})

router.get("/remark/:id",(req,res) =>{
    let id = req.params.id;
    db.query(`SELECT * FROM  SHOP WHERE ID = ${id}`,(err,result) =>{
        if(err) throw err;
        db.query(`SELECT * FROM COMMENT WHERE TB_ID = ${id}`,(err,result1) =>{
            if(err) throw err;
            res.render('remark',{shop:result[0],comment:result1})
        })
    })
})


module.exports = router;