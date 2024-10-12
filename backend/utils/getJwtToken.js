import jwt from "jsonwebtoken";

export default  function getJwtToken(userId,jwt_key,res){
    const token = jwt.sign({userId},jwt_key,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
    })
}   

