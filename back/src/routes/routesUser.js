const express = require('express');
const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUser = require('../controllers/user/getUser');
const getdUser = require('../controllers/user/getdUser');
const getNameUser = require('../controllers/user/getNameUser');
const deleteUser = require('../controllers/user/deleteUser');
const resgisterUser= require('../controllers/user/registerUser')
const createLogin = require('../controllers/user/createLogin');
const {check} = require('express-validator');
const loginUser = require('../controllers/user/loginUser');
const router = express.Router();
const multer=require('multer');
const upper=multer({dest : 'controllers/user/createUser'})
const logon=multer({dest:'controllers/user/loginUser'})
const passport=require('passport');
const validateToken = require('../controllers/user/validateToken');

//router.get('/', getUser);
router.get('/:dni', getdUser);
router.get('/name/:name', getNameUser);  
// se requier check de express-validator   
router.get('/',createUser);

router.post('/',resgisterUser);
//router.get('/registro',createUser);
// passport.authenticate('local-registro',{
//     successRedirect:'/profile',
//     failureRedirect:'/',
//     passReqToCallback:true

// }));


// [check('name','el nombre es obligatorio').not().isEmpty(),                    
// check('surname','el surname  es obligatorio').not().isEmpty(),
// check('Username','el username es obligatorio').not().isEmpty(),
// check('password','la pasword es obligatoria').not().isEmpty(), 
// check('dni','el dni es obligatorio').not().isEmpty(),
// check('age','la edad es obligatoria').not().isEmpty(),
// check('address','la direccion es obligatoria').not().isEmpty(),
// check('phoneNumber','el numero de telefono es obligatorio').not().isEmpty(),
// ]     
router.put('/:dni', updateUser);
router.delete('/delete/:dni', deleteUser);
router.get('/users/login',createLogin);
router.post('/users/login',loginUser);
router.get('/validate-tokenn',validateToken)
router.get('/profile',(req,res,next)=>{
    res.render('profile');
})



module.exports = router;  