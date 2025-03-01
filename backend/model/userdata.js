import mongoose from "mongoose";
const schema=new mongoose.Schema({
    title:{
        type:String,
        
    },
    description:{
        type:String,
        require:true

    },
    email:{
      type:String,
      require:true
    }
},{timestamps:true})
const notesSchema=mongoose.model('notes',schema)
export default notesSchema;