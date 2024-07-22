import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-1 items-center justify-center bg-gradient-to-bl from-blue-600 to-slate-900 max-h-[20%]'> 
    <a className='mr-[10px]' href='home'> <i className="fa-solid fa-house"></i></a>
    <p className='text-[1.5rem] font-bold '>Passwords Game</p>
  </div>
  )
}
