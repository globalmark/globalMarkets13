const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');



const loginUser=async (req,res)=>{ 
    let {Username,email,password}=req.body;
    //console.log(email,password,Username);
    let user= await userSchema.findOne({where:{email:req.body.email}});
    

    console.log(user);
    if(user){
      //const igual=bcrypt.compareSync(password,user.password);
      const igual=true;
      console.log(igual);
      console.log(password,user.password);
      console.log(Username,user.Username);
      console.log(email,user.email);

       if(user.Username === Username && igual && user.email === email){
         res.status(200).json({success: createToken(user)});

       }else{
       return  res.status(404).json('error de usuario o password');
       }
    }else{
       return  res.status(404).json('error de usuario o password');
    };
 
 function createToken (user){   //creo el token
     const payload={
             username:user.Username,
             usermail:user.email,
             createdAt:moment().unix(),
             expiredAt:moment().add(30,'minutes').unix()
     }
     return jwt.encode(payload,'clave secreta');

 };


}

module.exports = loginUser;