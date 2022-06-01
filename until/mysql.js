let mysql = require('mysql')

let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'project'
})

db.connect(err =>{
    if(err) throw err;
    console.log("mysql连接成功");
})

db.inquery = function(table,callback){
    let sql = `SELECT * FROM  '${table}'`
    db.query(sql,(err,result)=>{
        if(err) throw err;
        callback(result)
    })
}


module.exports= db;