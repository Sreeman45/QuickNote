import Notesboxes from '../notes';
import Speechrecognition from '../translateapi';
import { Searchbar } from '../searchbar';
import { useState,createContext } from 'react';
import Cards from '../cards';
export const context=createContext(null) 
export default function  Masti(){
    const [words,setWords]=useState('');
    const[modal,setModal]=useState(false);
    return(
        <>
        <div className='w-[100%] flex flex-col h-screen '>
        <Searchbar />

        <context.Provider value={{words,setWords,modal,setModal}}>
           <Cards/>
          
        <Notesboxes/>
        <div className='flex-grow w-full content-end mb-10 h-fit '>
            <Speechrecognition /></div>
            </context.Provider>
            </div>
            </>
            
    )
}