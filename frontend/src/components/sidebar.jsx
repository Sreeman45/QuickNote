import {  Home, Star } from "lucide-react";
import { useEffect, useState,useContext } from "react";
import { checkAuth } from "@/auth/auth";
import { useNavigate } from "react-router-dom";
import { ChevronUp } from 'lucide-react';
import { emailcontext } from "./routes/HomePage";
const value=99;
export default function Sidebar(){
   const [logout,setLogout]=useState(false)
   const {setEmail}=useContext(emailcontext)
   const navigate=useNavigate()
    const [data,setdata]=useState(null)
    const fetchdata=async()=>{
       const user= await checkAuth('/data/mydata',{method:'GET',credentials:'include'  })
       console.log(user)
        if(user.error){     
         return navigate('/login')
       }
       
       if(user.message) setdata(user);
       if(user.email) return setEmail(user.email);
    
    }
    const handleLogout=()=>{
      checkAuth('/users/logout',{method:'DELETE',credentials:'include'  }).then(()=>navigate('/login'))
    }
  useEffect(()=>{
    fetchdata()
  },[])
     return(
        <div className="sm:hidden md:flex flex-col flex-wrap w-[18%] h-screen justify-start items-center border-gray-500 border-x-2 border-opacity-30 ">
            <div className="h-24 flex flex-wrap justify-between text-xl items-center "><span className="h-10 w-8 bg-purple-700 border-2 border-purple-900 mr-3 rounded-3xl font-bold "></span >AI Notes</div>
            <div onClick={fetchdata} className="hover:text-purple-700 h-16 w-[100%] rounded-full flex flex-wrap justify-start items-center hover:bg-slate-300 bg-opacity-80 cursor-pointer font-bold text-gray-600"><Home className="mr-2 ml-10
            "/>Home</div>
            <div className="hover:text-purple-700 h-16 w-[100%] rounded-full flex flex-wrap min-w-[10%] justify-start items-center  hover:bg-slate-300 cursor-pointer font-bold text-gray-400"><Star className="mr-2 ml-10"/>Favorates</div>
            <div className="flex-grow content-end mb-4 text-xl h-10 mr-3 rounded-3xl font-bold ">
  {data ? (
    <div className="border-[1.5px] mb-4 text-purple-800">
      {logout && (
        <button
          className="hover:border-[1.5px] hover:bg-gray-400 bg-purple-300 rounded text-red-800 text-lg sm:text-xl px-3 sm:px-4 py-1 cursor-pointer hover:-translate-y-1 min-w-2"
          onClick={handleLogout}
        >
          logout
        </button>
      )}
      <button
        className="hover:border-[1.5px] hover:bg-gray-400 rounded text-gray-800 text-lg sm:text-xl px-2 sm:px-4 py-1 cursor-pointer hover:-translate-y-1 min-w-2 inline-flex"
        onClick={() => setLogout(!logout)}
      >
        {data.fullname.split(' ')[0].slice(0, 6)} <ChevronUp className="ml-1" />
      </button>
    </div>
  ) : (
    <button
      className="hover:border-[1.5px] hover:bg-purple-400 bg-purple-300 rounded text-purple-800 text-xl sm:text-2xl px-3 sm:px-4 py-1 cursor-pointer hover:-translate-y-1 min-w-2"
      onClick={() => navigate('/login')}
    >
      Login
    </button>
  )}
</div>

        </div>
     )
   }
   export {value}