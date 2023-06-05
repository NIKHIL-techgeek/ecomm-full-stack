// used for registering users
// kind od related to models
import  {hashPassword}  from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
export const registerController=async (req,res)=>{
    try
    {
        const {name,email,password,phone,address} = req.body
        // validation
        if (!name) {
            return res.send({error:'name is required'})
        }
        if (!email) {
            return res.send({error:'email is required'})
        }
        if (!password) {
            return res.send({error:'password is required'})
        }
        if (!phone) {
            return res.send({error:'phone number is required'})
        }
        if (!address) {
            return res.send({error:'address number is required'})
        }

        const existingUser=await userModel.findOne({email});
        // existing user
        if (existingUser) {
            return res.status(200).send({success:true,message:'already registered please login'})
        }
        // register user
        const hashedPassword=await hashPassword(password);
        // save
        const user= await new userModel({name,email,address,phone,password:hashedPassword}).save()

        res.status(201).send({success:true,message:'user register successfully',user})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({success:false,message:'error in registration',error})
    }
};

