import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddWords from './Pages/AddWords'
import Home from './Pages/Home'
import Help from './Pages/Help'
import Rules from './Pages/Rules'


export default function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/AddWords' element={<AddWords/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/rules' element={<Rules/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
