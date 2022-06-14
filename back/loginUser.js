const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');



const loginUser=async (req,res)=>{ 
   // let {Username,email,password}=req.body;
    let email=req.body.email;
    let password=req.body.password;
    let Username=req.body.Username; 
    console.log(email,password,Username);
    let user= await userSchema.find({Username : req.body.Username});
    //let passw= user[0].password;
    //console.log(user[0].password);
    if(user){
       const igual=bcrypt.compareSync(password,user[0].password);
      //let igual =true;
      console.log(igual);
       console.log(password,user[0].password);
       console.log(Username,user[0].Username);
       console.log(email,user[0].email);

       if(user[0].Username === Username && igual && user[0].email === email){
          res.status(200).json({success: createToken(user)});
         //res.json('hola')
 
       }else{
       return  res.status(404).json('error de usuario o password');
       }
    }else{
       return  res.status(404).json('error de usuario o password');
    };
 
 function createToken (user){   //creo el token
     const payload={
             password:user[0].password,
             email:user[0].email,
             createdAt:moment().unix(),
             expiredAt:moment().add(30,'minutes').unix()
     }
     return jwt.encode(payload,'clave secreta');

};


}

module.exports = loginUser;