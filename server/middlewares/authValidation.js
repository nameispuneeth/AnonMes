const jwt=require("jsonwebtoken");

const jwtVerification=async (req,res,next)=>{
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,process.env.SecretKey);
        req.email=decoded.email;
        next();
    }catch(e){
        res.send({status:'error',error:'Session Expired'});
    }
}
module.exports=jwtVerification;