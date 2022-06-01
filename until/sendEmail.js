const nodemailer = require('nodemailer');
　　// 创建可重用邮件传输器
　　const transporter = nodemailer.createTransport({
　　　　host: "smtp.126.com", // 网易的邮件地址
　　　　port: 465, // 端口
　　　　secureConnection: false, // use SSL
　　　　auth: {
    　　　　　　 user: 'throb668@126.com', //用户名
                pass: 'HULJACYRUSSBKWCY' // SMTP授权码
　　　　}
　　});
　　const send = (mailOptions) => {
　　　　transporter.sendMail(mailOptions, function(error, info) {
　　　　　　if (error) {
　　　　　　　　return console.log(error);
　　　　　　}
　　　　　　console.log('Message send: %s', info.messageId);
　　　　});
　　}

const randomFns=()=> { // 生成6位随机数
    let code = ""
    for(let i= 0;i<6;i++){
        code += parseInt(Math.random()*10)
    }
    console.log(code);
    return code 
}
　


const sendEmail = (Email) =>{
    let emailCode = randomFns() //验证码为6位随机数，这个自己用random（）写就行
　　let email = {
　　title: '注册验证码',
　　htmlBody: '<h1>Hello!</h1><p style="font-size: 18px;color:#000;">注册验证码为：<u style="font-size: 16px;color:#1890ff;">' + emailCode + '</u></p><p style="font-size: 14px;color:#666;">10分钟内有效</p>'
　　}

    let mailOptions = {
        　　　　from: 'throb668@126.com', // 发件人地址
        　　　　to: Email, // 收件人地址，多个收件人可以使用逗号分隔
        　　　　subject: email.title, // 邮件标题
        　　　　html: email.htmlBody // 邮件内容
        　　};
    send(mailOptions)   
    return emailCode; 
}

module.exports=sendEmail;
　　