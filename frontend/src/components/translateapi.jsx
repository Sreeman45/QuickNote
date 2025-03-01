import { useEffect, useRef, useState,useContext } from "react";
import { Button } from "@/components/ui/button";
import {ImagePlus} from 'lucide-react';
import { context } from "./routes/masti";
export default function Speechrecognition(){
    const [file,setFile]=useState(false)
   const {setWords,setModal}=useContext(context)
    const input=useRef(null)
    const [sentence,setSentence]=useState('');
  const [dots,setDots]=useState(false);
  const [text,settext]=useState('');
    useEffect(()=>{
        if(input.current){
            input.current.value=sentence
            settext(sentence)
        }
    },[sentence])
    function record(){
        let voiceRecogniser=window.SpeechRecognition || window.webkitSpeechRecognition;     
        if(voiceRecogniser){
        const speech=new voiceRecogniser();
    
        speech.lang='en-US';
        speech.interimResults=true;
        speech.maxAlternatives = 1;
        speech.start();
        setDots(true)
        speech.onresult=(event)=>{
            setSentence(event.results[0][0].transcript)
           
            
        }
       
        speech.onerror = function(event) {
            console.log("Error: ", event.error);
          };
        
         speech.onend = function(){
          
    
             

            console.log("Speech recognition ended");
            console.log(text)
            setDots(false)
            
          }
        }
        else{
            console.log("an error occured")
         }
    }
    const handlefile=(e)=>{
        const file=e.target.file;
        if(file){
            setFile(file)
        }
    }
   function handleText(e){
       setSentence(e.target.value)
      
       console.log(text)
       
  
   }
   function handleUpdate(){
    setWords(text)
    console.log(text)
    setModal(true)
    setSentence('')

   }

    return(
       
  
      <>
      
        <input type="file" className="relative top-16 left-4  opacity-0 h-6 w-6  z-10 hover:cursor-pointer" onClick={handlefile}/>
        <ImagePlus className="relative top-9 left-4"/>
       
        <input ref={input} type="text " className="pl-12 border-blue-600 border-2  h-12 rounded-full focus:outline-none focus:border-blue-800 w-[90%] sm:w-full " onChange={handleText}></input>
        {dots ?  <span className="relative right-36 mb-2" onClick={record}><Button variant="destructive" >...</Button></span> :
          
          <>
        
        <span className="relative right-52  mb-2" ><Button className='bg-green-800 rounded-full hover:bg-green-600' onClick={handleUpdate} >↑</Button><Button variant='destructive' className='ml-4 fixed mt-[6px] sm:px-1 sm:ml-1 sm:text-sm' onClick={record}>Start Recording</Button></span></> }
        </>)
        
}