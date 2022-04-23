const { request ,response} = require("express");
const database = require("../other/requette");


const controlleurTest = class {
    static accueilGet = (req=Request ,  res=response) =>{
        res.render('index')
    }


    static accueilPost = (req=Request ,  res=response) =>{
        database.insertUser(req.body,req.file.filename)
        res.redirect('/resultat')   
    }

    static resultat = (req=Request ,  res=response) =>{ 
        database.afficheuser().then(success =>{
            console.log('successsvjb',success);
            res.render('resul',{success})
        }).catch(error=>{
            console.log(error)
        })
      
    }
}




module.exports=controlleurTest;