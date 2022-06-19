const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');
const alert =require('alert');


function createToken (user){   //creo el token
    const payload={
    username:user.Username,
    usermail:user.email,
   createdAt:moment().unix(),
    expiredAt:moment().add(30,'minutes').unix()
     }
  return jwt.encode(payload,'clave secreta');

   };

const isValidToken = () =>{
    return new Promise((resolve,reject) => {
        try {
            jwt.verify(token, (err,payload) => {
                const {email} = payload;
                resolve(email);
            })
        } catch (err) {
            reject('token is invalid')
        }
    })
}

const validateToken =  async (req,res)=>{ 
    const token = req.Cookies;
    console.log(token);

    let userEmail = '';

    try {
        userEmail = await jwt.isValidToken(token);
    } catch (error) {
        return res.status(401).json({
            message:'Token de autorizacion no es valido'
        })
    }

    let user = await userSchema.findOne(userEmail);
    if(!user){
        return res.status(400).json({
            message:'No existe usuario con ese email'
        })
    }


    return res.status(200).json({
        token: createToken(user),
        user:{
            email,role,Username
        }
    })

}

module.exports = validateToken;