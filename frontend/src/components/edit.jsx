import { useContext, useEffect, useRef, useState } from "react"
import { Button } from "./ui/button";
import { emailcontext } from "./routes/HomePage";
export default function Edit({id,title,description,editbox,setEditBox}){
  const {seti}=useContext(emailcontext)
  const[editTitle,setEditTitle]=useState(title)
  const[editDescription,setEditDescription]=useState(description)
    const show=useRef()
    useEffect(()=>{
      editbox ? show.current?.showModal() : show.current?.close()
    },[editbox])
    const updateNote=(id)=>{
       fetch(`/data/updatenote/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        updatedTitle:editTitle,
        updatedDescription:editDescription
    })})
       .then(res=>{res.json();setEditBox(false);seti(prev=>prev-1)})
       .then(data=>console.log(data))
       .catch(err=>console.log(err))
    }
    return(
           
           <dialog ref={show} className="h-[100%] w-[100%] flex justify-center items-center bg-transparent">
                     <div className="border-[2px] rounded-2xl h-[80%] w-[35%] px-4 py-2  border-blue-400 bg-white" >
                        <div className=" flex  items-center justify-end gap-2 mb-2">
                          <button className=" font-bold text-xl rounded-full " onClick={()=>setEditBox(false)}>❌</button>
                        </div>
                        
                         <input type="text" placeholder="Title" name="title" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} className="p-2 w-[100%] h-12 text-2xl focus:outline-blue-300 border-[1.5px] border-gray-400 rounded font-serif font-semibold text-gray-700" />
                         <textarea type="text" placeholder="Description" name="description" value={editDescription} onChange={(e)=>setEditDescription(e.target.value)} className="p-2 w-[100%] h-[60%] mt-10 placeholder:text-2xl text-xl focus:outline-blue-300 border-[1.5px] border-gray-400 rounded font-serif placeholder:font-semibold text-gray-700 " />
                          <div className="w-[100%] flex justify-center"><Button className="w-[70%] mt-6 place-self-center-center font-bold text-2xl bg-cyan-700 hover:bg-blue-700" onClick={()=>updateNote(id)}>Save</Button></div>
                     </div>
                    </dialog>
        
    )
}