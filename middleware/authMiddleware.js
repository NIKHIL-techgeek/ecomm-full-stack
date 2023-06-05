import  {Jwt}  from "jsonwebtoken";

// protect user - protected route token base
// next object whenever req get , next validate then response send
export const requireSignIn=async(req,res,next)=>{
    try
    {
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        next();
    }
    catch(error)
    {
        console.log(console.error);
    }
}