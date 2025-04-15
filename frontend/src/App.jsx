
import './App.css'

import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './components/routes/HomePage';
import LoginPage from './components/routes/Login';
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
 