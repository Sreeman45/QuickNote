
import { useContext, useRef, useState } from "react"
import { Expand, Trash } from "lucide-react";
import { Minimize2,Pencil } from "lucide-react";
import { emailcontext } from "./routes/HomePage";
import Edit from "./edit";

export default function Alert({id,date,title,description}){
     const {seti}=useContext(emailcontext)
     const show=useRef()
     const[editbox,setEditBox]=useState(false)
     const deleteNote=(id)=>{
        fetch(`data/delete/${id}`,{method:'DELETE'}).then(res=>res.json()).then(data=>{show.current?.close();return data.message='success' ? seti(prev=>prev+1) : null}).catch((err)=>console.log(err))
     }
     const updateNote=(title,description)=>{
            setEditBox(true)
     }
     return(
        <>
        <dialog ref={show} >
        <div  className="border-[1.5px] p-3 py-4 max-h-72 max-w-screen-md  border-gray-500 no-scrollbar rounded overflow-y-scroll no-scrollbar"  >
          <div className="flex gap-3 justify-between">
               <h3 className="text-xl font-semibold font-serif overflow-y-scroll no-scrollbar ">{title}</h3>
               <div className="flex gap-2">
            <Minimize2 className="size-5 cursor-pointer" onClick={()=>show.current?.close()}/>
                
               <Trash className="size-5 hover:-translate-y-1 ease-in cursor-pointer hover:text-red-600" onClick={()=>deleteNote(id)}/>
               </div>
          </div>
          <div className="text-xs">{date}</div>
             <p className="text-sm mt-1 text-wrap overflow-y-scroll no-scrollbar ">{
               description
               }</p>
        </div>
        </dialog>
        {editbox &&
        <Edit id={id} title={title} description={description} editbox={editbox} setEditBox={setEditBox}/>}
        <div  className="border-[1.5px] p-3 h-32 w-72  border-gray-500 mt-4 ml-4 rounded hover:shadow-lg" >
          <div className="flex gap-3 justify-between">
               <h3 className="text-xl font-semibold font-serif">{title.length > 18 ? title.slice(0,15)+'...' : title}</h3>
               <div className="flex gap-2">
               <Pencil className='size-5 cursor-pointer' onClick={()=>updateNote(title,description)}/>
               <Expand className='size-5 cursor-pointer'onClick={()=>show.current?.showModal()}/>
                
               <Trash className="size-5 hover:-translate-y-1 ease-in cursor-pointer hover:text-red-600" onClick={()=>deleteNote(id)}/>
               </div>
          </div>
          <div className="text-xs">{date}</div>
             <p className="text-sm mt-1 overflow-x-scroll no-scrollbar">{
               description.length > 60 ? description.slice(0,93)+'...' : description
               }</p>
        </div>
        </>
     )
}