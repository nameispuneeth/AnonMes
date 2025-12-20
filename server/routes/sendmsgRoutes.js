const express=require("express");
const router=express.Router();
const User=require("../models/user.model");


router.get("/validtoken",async(req,res)=>{
    const token=req.headers.authorization;
    try{
        const user=await User.findOne({shareid:token});
        if(!user) return res.send({status:'error',error:"Not A Valid URL"});
        if(user.shareidexpiryDate!=null && user.shareidexpiryDate <= new Date()) return res.send({status:"error",error:"URL Expired"});
        res.send({status:'ok',name:user.username});
    }catch(e){
        res.send({status:'error',error:"Network Issue"});
    }
})

router.post("/sendMessage",async(req,res)=>{
    const sharedid=req.headers.authorization;
    const message=req.body.message;
    try{
        const user=await User.findOne({shareid:sharedid});
        if(!user) return res.send({status:'error',error:"Not A Valid URL"});
        user.messages.push({
            message:message,
            sentAt:Date.now()
        })
        await user.save()
        res.send({status:'ok'});
    }catch(e){
        res.send({status:'error',error:'Network Issues'})
    }
})

module.exports=router