import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddWords from './Pages/AddWords'
import Home from './Pages/Home'


export default function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/AddWords' element={<AddWords/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
