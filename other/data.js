const { createConnection } = require('mysql');
const mysql= require('mysql');



const db = mysql.createConnection({
    host:'192.168.64.2',
    user:'kionou',
    password:'12345',
    database:'multer'
})


module.exports=db