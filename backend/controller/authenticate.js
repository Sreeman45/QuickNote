import jwt from 'jsonwebtoken'
const key='@123@123';
const authenticate=(req,res,next)=>{
     if(Object.keys(req.cookies).length === 0){
      return next()
     }
     try{
   
     const token=req.cookies['auth'].split(' ')[1]
     if(token){
        const validate=jwt.verify(token,key)
        req.user=validate
        return next()
     }
    }
    catch(err){
       return res.json({
        error:true,
        message:'unathourized'
       })
    }
}
export {authenticate};