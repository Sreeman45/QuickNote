
import { Loader2 } from 'lucide-react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import React, { useState } from 'react';
import { BrowserRouter, createBrowserRouter,RouterProvider,Routes,Route } from 'react-router-dom';
import HomePage from './components/routes/HomePage';
import LoginPage from './components/routes/Login';
import { LoginForm} from './components/login-form';
import SignupForm  from './components/routes/Signup';

function App() {
  return (
    <>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Signup' element={<div className='h-screen flex justify-center items-center'><SignupForm/></div>} />
      <Route path='/Login' element={<LoginPage/>}/>
     
    </Routes>
    </BrowserRouter>
 
    </>

  )
}

export default App;
 