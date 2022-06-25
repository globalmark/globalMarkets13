const userSchema = require('../../models/user'); 
const user = require('../../models/user');
const jwt=require ('jwt-simple');
const moment =require('moment');
const nodemailer=require('nodemailer');
const bcrypt =require('bcrypt')
const alert=require('alert');
//const userSchema = require('../../models/user'); 

const respon = async (req,res,next) =>{
  

console.log(req.body);
let password=bcrypt.hashSync(req.body.password,10);
let  name=req.body.name;
let surname=req.body.surname;
let email=req.body.email;
let Username=req.body.Username;
let dni=req.body.dni;
let age=req.body.age;
let address=req.body.address;
let phoneNumber=req.body.phoneNumber;
let role = "client"
 
let mailencontraddo= await userSchema.findOne({email : email});
let usernameexiste= await userSchema.findOne({Username:Username});
let dniexiste=await userSchema.findOne({dni:req.body.dni});
     
    if(!mailencontraddo){
        console.log('no exsite el mail en la base') 
         if(!usernameexiste){
                 console.log('no exsite el Username en la base')
                   if(!dniexiste){
                           let user= userSchema({name,surname,email,Username,password,dni,age,address,phoneNumber,role});
                           await user.save();
                           console.log(user)
                           var transporter= nodemailer.createTransport({
                            host:"smtp.gmail.com",
                            port: 587,
                            secure:false,
                            auth:{
                                user:'danielperco4@gmail.com',
                                pass:'apwsmdkesmhtmdki'
                            }
                        });
                        console.log(req.body.email)
                        var mailOptions={
                            from :'"server Api"<danielperco4@gmail.com>',
                            to : req.body.email,
                            subject:"server Api",
                            text:'Buenos dias , Bienvenido a GLOBAL MARKETS, Vamos Bien '
                        };
                        console.log('hola');
                        await transporter.sendMail(mailOptions,(error,info)=>{

                                if(error){
                                   return   res.status(404).json(error.message);
                                      
                                }else{
                          
                                    console.log('emial enviado',info);
                                  //return  res.status(200).jsonp(req.body);
                                } 
                        

                            })  
                            
                            //catch(error){return res.status(404).json({error:'el acceso no es correcto'})}
                        
                            req.email=req.body.email;
                            next();
                   }else{
                     alert('el dni   ya esta registrado  ');
                     return false;
                   }
         }else{
            alert('el Username  ya esta registrado ,prueb con otro ');
            return false;
         }
    }else{
        alert('el email   ya esta registrado ,prueb con otro ');
    }
}

module.exports= respon ;