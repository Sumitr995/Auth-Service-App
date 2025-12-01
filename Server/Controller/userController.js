import userModel from "../models/userModel.js";

export const getUserData = async(req, res)=>{

try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if(!user){
       return res.status(400).json({success:false, message:"User not logged in"});
    }

    console.log(user.name)
    return res.status(200).json({
        success: true,
        userData:{
            name: user.name,
            isAccountVerfied: user.isAccountVerfied
        }
    })

   
    
} catch (error) {
    res.status(400).json({success:false, message: error.message});
}

};