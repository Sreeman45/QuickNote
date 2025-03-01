import { useContext, useEffect,useState } from "react";
import Alert from "./alert";
import { emailcontext } from "./routes/HomePage";
export default function Cards(){
    const {email,i,search,notes,setNotes}=useContext(emailcontext)

    
   useEffect(()=>{
    fetch('/data/allnotes').then(res=>res.json()).then((data)=>{setNotes(data);})
     
   },[i])

    return(
        <div className="flex flex-wrap gap-x-6 gap-y-4 overflow-y-scroll no-scrollbar">
         {
           notes.length && notes.filter((note)=>note.title.toLowerCase().includes(search) || note.description.toLowerCase().includes(search)).map((note,i)=>{
                const date=new Date(note.createdAt).toLocaleDateString();

            return <Alert key={i} id={note._id} email={email} title={note.title} description={note.description} date={date}/>
            })
         }
        </div>
        )
}