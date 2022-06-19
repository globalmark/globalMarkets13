const Router =require('express');

const routeGoogle= Router();

routeGoogle.get('/google',(req,res,next)=>{
    res.send(req.user)
});

module.exports=routeGoogle;

