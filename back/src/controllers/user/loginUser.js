const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');
const alert =require('alert')


const loginUser=async (req,res)=>{ 
   console.log(req.body);
    let Username=req.body.Username;
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password,Username);
    let user = await userSchema.findOne({email:req.body.email});
    const igual=bcrypt.compareSync(password,user.password);
    console.log(user)

    let mailencontraddo= await userSchema.findOne({email : email});
    let usernameexiste= await userSchema.findOne({Username:Username});
    let passwexiste=await userSchema.findOne({password:password});
    if(mailencontraddo){ 
            console.log('email correcto ')
             console.log(igual);
            
               if(usernameexiste){
                       console.log('Username correto')
                            if(igual && passwexiste){  
                                                
                                
                                     res.status(200).json({
                                        token: createToken(user),
                                        user:{
                                                email,Username
                                        }


                                });


                                     alert('Usuario Registrado');
                                     

                            }else{
                                    alert('la password  no es correcta ') ;
                                    return false;
                            }
               }else{
                  alert('El Username no existe  ') ;
                  return false;
               }
        
        
      }else{
            alert('el email no existe ');
            return false;
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