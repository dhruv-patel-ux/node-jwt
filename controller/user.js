const User = require('../model/user')
const jwt = require('jsonwebtoken');
const key='keyForJwt'
exports.addUser= async (req,res)=>{
    if(req.body){
        const user = User(req.body)

        try{
            await user.save();
            const token = setToken();
            res.send({message:'success',data:req.body,token});
        }catch(error){
            res.status(400).send(error);
        }
    }

}

exports.profile= async (req,res)=>{
        jwt.verify(req.token,key,(err,auth)=>{
            if(err){
                res.send('invalide token');
            }
            else{
                res.send({message:'success',auth});
            }
        });
}
const setToken = function (data){
    return jwt.sign({data},key,{expiresIn:"5000s"});
}