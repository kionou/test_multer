const db = require("./data");

const database = class {
    static insertUser = (into,photo) =>{
        console.log('photo',photo);
        console.log('intooo',into);

        let sql = "INSERT INTO `users`(`nom`, `prenom`, `image`, `password`) VALUES (?,?,?,?);"
        db.query(sql,[into.nom,into.prenom,photo,into.password],(error,result)=>{
            if (result) {
                console.log(result);
                return result
                
            } else {
                console.log(error);
                return error
            }
        })

    }

    static afficheuser = ()=>{
    return  new Promise((resolve,reject)=>{
        let sql = "SELECT * FROM `users`;"
        db.query(sql,(err,result)=>{
            if (result) {
                console.log('resultat',result);
                resolve(result)
            } else {
                console.log('errorr',err);
                reject(err)
            }
        })
        })
        
    }
}




module.exports=database;