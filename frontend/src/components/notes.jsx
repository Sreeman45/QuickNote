
import { useContext, useState } from "react";
import { context } from "./routes/masti";
import { Button } from "./ui/button";
import Modal from 'react-modal';
import { emailcontext } from "./routes/HomePage";
export default function Notesboxes(){
        const {words,setWords,modal,setModal}=useContext(context)
       const {email,seti}=useContext(emailcontext)
      const [title,setTitle]=useState('')
      const sendData=()=>{
         if(!email){
            return alert('you are not logged in')
         }
         fetch('/data/input',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:title || 'No Title',words:words,email:email})})
         .then(()=>{setModal(false);setTitle('');console.log(words);seti(prev=>prev+1)}).catch(err=>console.log(err))
      }
        return(
           <>
            {
             <Modal 
             ariaHideApp={false}
             isOpen={ modal }
             style={{
               overlay:{
                  backgroundColor:'rgba(0,0,0,0.1)',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
               
               },
               content: {   
               backgroundColor:'transparent',
               
             }
            }
         }
         
             >
            <div className="h-[100%] w-[100%] flex justify-center items-center ">
             <div className="border-[2px] rounded-2xl h-[90%] w-[35%] px-4 py-2 bg-white border-blue-400" >
                <div className=" flex  items-center justify-end gap-2 mb-2">
                  <button className=" font-bold text-xl rounded-full " onClick={()=>setModal(!modal)}>❌</button>
                </div>
                
                 <input type="text" placeholder="Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="p-2 w-[100%] h-12 text-2xl focus:outline-blue-300 border-[1.5px] border-gray-400 rounded font-serif font-semibold text-gray-700" />
                 <textarea type="text" placeholder="Description" name="description" value={words} onChange={(e)=>setWords(e.target.value)} className="p-2 w-[100%] h-[60%] mt-10 placeholder:text-2xl text-xl focus:outline-blue-300 border-[1.5px] border-gray-400 rounded font-serif placeholder:font-semibold text-gray-700 " />
                  <div className="w-[100%] flex justify-center"><Button className="w-[70%] mt-6 place-self-center-center font-bold text-2xl bg-cyan-700 hover:bg-blue-700" onClick={sendData}>Add</Button></div>
             </div>
            </div>
            </Modal>
}
           </>
        )
}