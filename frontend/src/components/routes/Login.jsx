import { LoginForm } from "@/components/login-form"
import Passwordinput from "../Passwordinput"
import { Button } from "../ui/button"
import { data, Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { handleSuccess,handleError } from "@/util"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
export default function LoginPage() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate()
  const handleEmailinput=(e)=>{

     setEmail(e.target.value)
  }
  const handlePasswordinput=(e)=>{
  
    setPassword(e.target.value)
 }
 const handleSubmit=(e)=>{
   e.preventDefault();
   console.log('login')
   fetch('/users/login',{
   method:'POST',
   headers:{
      'Content-Type':'application/json'},
    body:JSON.stringify({
      email,
      password
    })}).then(res=>res.json()).then(data=>{
       console.log(data)
       if(data.success){
         handleSuccess('login Successful')
        navigate('/')
         
       }
       else{
         handleError('check your credentials')
       }
    }).catch(err=>{handleError(`check your credentials`)
           console.log('check your credentials',err)
    })

 }
  return (
   <div className=" flex justify-center h-screen items-center">

    <div className="flex w-92 flex-col px-6 py-8   border-black rounded border-2">
      <ToastContainer/>
    <form onSubmit={handleSubmit}>
       <h2 className="font-bold text-6xl mb-8">Login</h2>
       <label htmlFor="email"></label>
       <input onChange={handleEmailinput} required name='email' value={email} type="text" className="w-full h-10  border-[1.5px] border-gray-700 px-4 mr-8 focus:outline-none" placeholder="enter email"/>
       <h4 className="text-xl font-semibold text-black-200 mb-4">Email</h4>
       <Passwordinput placeholder="Enter password" onchange={handlePasswordinput} value={password} name='password'/>
       <Button className="w-full text-xl from-accent-foreground mb-6 h-full">Login</Button>
       <p className="text-center">not registered yet?<Link to='/signup' className="text-blue-700 underline">Signup</Link></p>
       </form>
    </div>
   
   </div>
  )
}
