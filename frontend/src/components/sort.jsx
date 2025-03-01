import { SlidersHorizontal } from "lucide-react";
import { useContext, useState } from "react";
import { emailcontext } from "./routes/HomePage";
export default function Sort(){
    const [sort,setSort]=useState(false)
    const {notes,setNotes,seti}=useContext(emailcontext)     
    const sortNotes=()=>{
        if(notes.length){
           console.log('reached')
         const sortedNotes=[...notes].sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
         console.log(sortedNotes)
         setNotes(sortedNotes)
         setSort(false)
        }
    }                                                                                                          
    return(
        <div className="mt-5 relative mr-8 ">
        <button className="px-3 py-2 rounded-full bg-gray-200 hover:bg-slate-400 font-semibold  text-gray-600 flex"  onClick={()=>setSort(!sort)}><SlidersHorizontal className="mr-2"/>Sort</button>
        
        {sort && <>
            <button className="text-sm bg-gray-200 p-[1px]  rounded hover:bg-gray-300 " onClick={sortNotes}>sort by date</button>
            </>}
        </div>
    )
}