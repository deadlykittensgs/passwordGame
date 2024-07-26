import React from 'react'
import Header from '../Components/Header'

export default function Help() {
  return (
    <div className='flex flex-col flex-1 h-screen'>
    <Header/>
    <div className='flex flex-col bg-blue-800 justify-center items-center'> 
  
<div className=' w-full flex flex-col flex-1 p-10 bg-gradient-to-b from-slate-500 to-slate-900 justify-evenly gap-7'>
    <h1 className=' flex justify-center text-[2rem] font-bold'>How to use this app</h1>
    <p>1. To start the game set the timer on the bottom right to the desired time and press the <span className='text-green-500'>start button</span></p>
    <p>2. If you get the answer correct press the <span className='text-green-400'>thumbs up</span></p>
    <p>3. If you get the answer incorrect press the <span className='text-red-500'>thumbs down</span></p>
    <p>4. To skip a word press the <span className='text-slate-300'>skip</span> between the thumbs up and thumbs down </p>
    <p>5. Once your time has ended the buttons will lock and you must click the button between the two scores to change the team</p>
    <p>6. Repeat steps 1-5 until you have a winner</p>
</div>
   <div  className='w-full flex flex-col flex-1 p-10 bg-gradient-to-t from-slate-500 to-slate-900   justify-evenly gap-7' >
   <h1 className=' flex justify-center text-[2rem] font-bold'>Buttons</h1>
    <p  className='flex flex-col text-center' > <i className="fa-solid fa-house hover:text-sky-500 mb-5 text-[1.4rem]"></i> To go back to the home screen click the house to the left of the words "Passwords Game"</p>
    <p className='flex flex-col text-center'> <i className=" fa-solid fa-skull-crossbones hover:text-red-500 mb-5 text-[1.4rem] "></i>  To compleat reset the game click the skull and crossbones to the right of the words "Passwords Game"</p>
    <p  className='flex flex-col text-center'>         <i className="fa-solid fa-bars hover:text-slate-900 mb-5 text-[1.4rem] "></i>  To add words to the game click the menu in the bottom left on the Home page and select the "Add Words" option</p>
    </div>
   
 

    
    </div>
    </div>
   
  )

}
