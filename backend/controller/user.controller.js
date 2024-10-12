import User from "../models/user.model.js"

const getUserController = async (req , res)=>{
    try {
        const loggedInUserId= req.user._id;

        const allUser = await User.find({_id:{$ne:loggedInUserId}});

        res.status(200).json(allUser)

    } catch (error) {
        console.log("error in get user controller");
        res.status(500).json({msg:`Error internal in getting users ${error}`})
        
    }
}

export default getUserController