var express = require('express');
var router = express.Router();
let db = require('../until/mysql');
var sd = require('silly-datetime');
let md5password = require('../until/crypto');
var formidable = require('formidable');
var  path = require('path');
var fs = require('fs');
const log4js = require('../until/log4j'); // 引入库
const logger = log4js.getLogger('datelog'); // 获取指定的输出源
let user_id1
let user_name1

router.get('/user/:username',(req,res)=>{
    let userName = req.params.username;
    user_name1 = userName;
    console.log("userName:"+userName);
    db.query(`SELECT * FROM users where user_name = '${userName}'`,(err,result) =>{
        if(err) throw err;
        user_id1 = result[0].id
        console.log(user_id1);
        res.render('case',{data:result[0],userName:req.session.userName})
    })
})

router.get('/a',(req,res) =>{
    console.log("名字"+user_id1);
    db.query(`SELECT * FROM  TB_SHOP WHERE USE_ID = ${user_id1}`,(err,result)=>{
        if(err) throw err;
        res.render('comment1',{shop:result})
    })
})

router.get('/comment/:id',(req,res) =>{
    db.query(`select * from shop where id = ${req.params.id}`,(err,result) =>{
        if(err) throw err;
        res.render("comment",{shop:result})
    })
})

router.post('/addcomment',(req,res) =>{
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
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
    let str = newName.substring(newName.length-17)
    console.log(newName.substring(newName.length-17));
    db.query(`insert into comment(tb_id,user_name,comValue,comTime,img) values(?,?,?,?,?)`,[parseInt(fields.roleId),req.session.userName,fields.comVal,time,"/images/"+str],(err,result)=>{
        if(err) throw err;
        res.redirect('/myself/a')
    })
    })
})

router.get("/info",(req,res) =>{
    db.query(`select * from users where id =${user_id1}`,(err,result)=>{
        if(err) throw err;
        res.render("info",{info:result})
    })
})

router.get("/upa",(req,res) =>{
    db.query(`select * from users where id =${user_id1}`,(err,result)=>{
        if(err) throw err;
        res.render("upa",{info:result})
    })
})

router.post("/upa",(req,res) =>{
    let body = req.body
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    db.query(`select * from users where user_name = "${body.name}"`,(err,result1) =>{
        if(err) throw err;
        if((user_name1 == body.name && result1.length<=1) || (result1 =="")){
            db.query(`select * from users where id = ${user_id1}`,(err,result) =>{
                if(err) throw err;
                if(md5password(body.old_paw) == result[0].password){
                    db.query(`delete from users where id = ${user_id1}`,(err,result) =>{
                        if(err) throw err;
                        db.query(`insert into users(id,user_name,password,email,create_time) values(?,?,?,?,?)`,[user_id1,body.name,md5password(body.new_paw),body.email,time],(err,reesult2)=>{
                            if(err) throw err;
                            logger.info('用户id：'+user_id1+",进行信息修改");
                            res.send('<script>alert("修改密码成功,请重新登录"); location.href="/"</script>')
                        })
                    })
                }else{
                    res.send('<script>alert("原密码错误"); location.href="/myself/upa"</script>')
                }
            })
        }else{
            res.send('<script>alert("用户名已经存在"); location.href="/myself/upa"</script>')
        }
    })
  
})

module.exports = router;