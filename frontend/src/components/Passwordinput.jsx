import { useState } from "react";
import { FaRegEye } from 'react-icons/fa6';
import {FaRegEyeSlash} from 'react-icons/fa6';

export default function Passwordinput({onchange,placeholder,value,name}){
    const [password,setPassword]=useState(false)
    const handleshowpassword=()=>{
        setPassword(!password)
    }
    return(
        <>
        <div className="flex  items-center px-5 border-[1.5px] border-gray-600   ">
        <input placeholder ={placeholder || "Enter Password"} required onChange={onchange} value={value} name={name} type={password  ? "text" : "password"} className="w-full py-3 mr-8 h-10 rounded   focus:outline-none"/>
        {
            password ? (<FaRegEye onClick={handleshowpassword} className=" text-blue-700 size-8 cursor-pointer "/>) :( <FaRegEyeSlash onClick={handleshowpassword} className=" size-8 cursor-pointer"/>)
        }
        </div>
        <h4 className="text-xl font-semibold mb-6">Password</h4>

        </>
    )
}