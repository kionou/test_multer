let express = require('express');
const controlleurTest = require('../controller/controlleur');
const upload = require('../middleware/multer');
let router= express.Router()



router.get('/',controlleurTest.accueilGet);
router.post('/post',upload.single('image'),controlleurTest.accueilPost);
router.get('/resultat',controlleurTest.resultat)







module.exports=router;