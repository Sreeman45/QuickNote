import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const Schema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        },
    password:{
        type:String,
        required:true
    }
   
    
},{ timestamps: true })
Schema.pre('save',async function (next){
    if (!this.isModified("password")) return next();
    try{
      this.password=await bcrypt.hash(this.password,10);
      next()
    }
    catch(err){
        console.log(err)
        next(err)
    };

})
const userSchema=mongoose.model('users',Schema);
export default userSchema;