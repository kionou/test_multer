const express= require('express');
const db = require('./other/data');
const route = require('./router/route');
const app = express()


db.connect((err)=>{
    if(!err){
        console.log('base connect');
        app.set('view engine','ejs');
        app.set('views','./views')
        app.use(express.static('public'));
        app.use('/uploads',express.static('./uploads'))
        app.use(express.json())
        app.use(express.urlencoded({ extended: false })) ;
        app.use('/',route)

    }else{
        console.log('base no connect');
    }
})









app.listen('5000',()=>{
    console.log('connecter au  port 5000');
})