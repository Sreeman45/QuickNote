import {Router} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router=Router()
import userSchema from '../model/authentication.js';
const key='@123@123';
router.post('/Signup',async(req,res)=>{

    let { fullname,email,password }=req.body;
    console.log(fullname,email,password)
    if(!fullname || !email || !password){
       return res.status(400).json({
        message:"please enter all details",
        success:false

       })
    }
    try{
        const checkemail=await userSchema.findOne({email:email})
        if(checkemail){
            return res.status(409).json({
                message:"user allready exists",
                success:false
            })
        }
    }
    catch(err){
       return res.status(400).json({
        err:err,
        message:'server error',
        success:false
       })
    }
    try{
    
      const user=await userSchema.create({
        fullname,
        email,
        password
      })
      const token=jwt.sign({
        fullname,
        email,
      },key,{expiresIn:'15d'})
   
    
     res.cookie('auth', `Bearer ${token}`,{path:'/',httpOnly:true,maxAge:15 * 24 * 60 * 60 *10000})
     return res.status(200).json({
        success:true,
        name:user.fullname,
        email:user.email,
        id:user._id

     })

    }
    catch(err){
       return res.json({
        success:false,
        message:'internal server error'
       })
    }

})
router.post('/login',async(req,res)=>{
    
    const {email,password}=req.body
    if(!email || !password){
        return res.status(500).json({
            success:false,
            message:"enter all details"
        })
    }
  
    try{
        const user=await userSchema.findOne({email:email})
        if(!user){
            return res.status(401).json({message:"no existing user",success:false})
        }
        const compare=await bcrypt.compare(password,user.password)
        if(compare){
             const token=jwt.sign({fullname:user.fullname,email:user.email},key)
            
     return res.cookie('auth', `Bearer ${token}`,{path:'/',httpOnly:true,maxAge:15 * 24 * 60 * 60 *10000}).status(200).json({
        success:true,
        fullname:user.fullname,
        email:user.email,
        id:user._id

     })
        }
        else{
            return res.status(401).json({
            success:false,
            message:"invalid credentials"
            })
        }
    }catch(err){
        return res.status(401).json({
            message:err,
            success:false
        })
    }
})
router.delete('/logout',(req,res)=>{

     res.clearCookie('auth',{httpOnly:true,path:'/'})
     return res.json({
        success:'true'
     })
})
export default router;