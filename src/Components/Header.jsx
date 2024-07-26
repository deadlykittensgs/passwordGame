import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-1 items-center justify-evenly max-h-[20%] background min-h-[70px]  '> 
    <a className='flex flex-col text-center' href='home'> <i className=" text-[1.7rem] fa-solid fa-house hover:text-sky-500 "></i>
    {/* <p>Home</p> */}
    </a>
    <p className='text-[1.5rem] font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent flex items-center justify-center border-solid border-[1px] rounded-full px-2 py-1 text-center cursive'>Passwords Game</p>
    <div className=' flex flex-col text-center' onClick={() => {location.reload()}}> <i className=" text-[1.7rem] fa-solid fa-skull-crossbones hover:text-red-500 "></i>
   {/* <p>Restart</p>  */}
   </div>
  </div>
  )
}



