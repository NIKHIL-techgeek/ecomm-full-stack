// used for registering users
// kind od related to models
import userModel from "../models/userModel.js";
export const registerController=async (req,res)=>{
    try
    {
        const {name,email,passwrod,phone,address} = req.body
        // validation
        if (!name) {
            return res.send({error:'name is required'})
        }
        if (!email) {
            return res.send({error:'email is required'})
        }
        if (!passwrod) {
            return res.send({error:'password is required'})
        }
        if (!phone) {
            return res.send({error:'phone number is required'})
        }
        if (!address) {
            return res.send({error:'address number is required'})
        }

        const user=await userModel.findOne({email});
        // existing user
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({success:false,message:'error in registration',error})
    }
};

