import { Router  } from 'express';
import notesSchema from '../model/userdata.js';
const router=Router()
router.get('/mydata',(req,res)=>{
   console.log(req.user)
   if(req.user){
   const {fullname,email}=req.user
   return res.json({
      message:true,
      fullname,
      email, 
     })
   }
})
const i=1;
router.post('/input',async(req,res)=>{
    const {title,words,email}=req.body
    
    if(!email){
      return;
    }
    try{
        const card=await notesSchema.create({
             title,
             description:words,
             email
        })
      return res.status(200).json({
         message:success
      })
    
    }
    catch(err){
      return res.status(400).json({
         message:'Database error'
      })

    }
     
})
router.get('/allnotes',async(req,res)=>{
   if(req.user){
     const {email}=req.user
     try{
      const allnotes=await notesSchema.find({email:email})
      return allnotes.length ? 
     res.status(200).json(allnotes) :  
      res.json({
        message:'no notes added'
      })
     }
    
     catch(err){
       return;
     }
    }
   return;

})
router.patch('/updatenote/:id',async(req,res)=>{
     const {id}=req.params;
     const {  updatedTitle,updatedDescription}=req.body;
     if(!id || !updatedTitle || !updatedDescription){
      return res.status(500).json({
        message:'invalid request',
        success:false
      })
     }
     try{
      await notesSchema.findByIdAndUpdate(id,{title:updatedTitle,description:updatedDescription})
      return res.status(200).json({
        success:true,
        message:'successfully updated'
      })
 }
 catch(err){
  console.log(err)
  return res.status(500).json({
    success:false,
    message:'internal server error'
  })
 }
})
router.delete('/delete/:id',async(req,res)=>{
  const {id}=req.params
  console.log(id)
  if(!id){
    return
  }
  try{
     await notesSchema.findByIdAndDelete(id)
     console.log('it happened')
     return res.status(200).json({
      message:'success'
     })

  }
  catch(err){
     console.log(err)
  }
})
export default router;