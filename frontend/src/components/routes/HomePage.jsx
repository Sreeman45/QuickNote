

import Sidebar from '../sidebar';
import Sort from '../sort';
import Masti from './masti';
import { useState,createContext } from 'react';
export const emailcontext=createContext()
export default function HomePage() {
    const [email,setEmail]=useState(null)
    const [i,seti]=useState(1) 
    const[search,setSearch]=useState('')
     const [notes,setNotes]=useState([])
    return (
        <main className='flex '>
           <emailcontext.Provider value={{email,setEmail,i,seti,search,setSearch,notes,setNotes}}>
            <Sidebar/>
            <Masti/>
            <Sort />
           </emailcontext.Provider> 
        </main>
    )
}