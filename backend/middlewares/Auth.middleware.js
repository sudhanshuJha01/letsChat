import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
const authMiddleware =async  (req , res , next)=>{
    try {
            const token = req.cookies.jwt;

            if(!token){
                return res.status(400).json({
                    msg:"unauthoirized - token not found"
                })
            }

            const decode = jwt.verify(token,process.env.JWT_KEY);   
            if(!decode){
                return res.status(400).json({
                    msg:"unauthoirized - token not found"
                })
            }
            console.log(decode);
            
            const user = await User.findById(decode.userId);
            if(!user){
                return res.status(400).json({
                    msg:"unauthoirized - token not found"
                })
            }
           
            req.user = user;
            next();

    } catch (error) {
        console.log("error in the authMiddleware");
        res.status(500).json({
            msg:"Internal server error"
        })
        
    }
}


export default authMiddleware;