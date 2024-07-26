import React from 'react'
import Header from '../Components/Header'

export default function Rules() {
  return (

    <>
     <Header/>
    <div className='flex justify-center bg-gradient-to-b from-slate-600 to-slate-800 '>
       
        <div className=' bg-gradient-to-b from-slate-600 to-slate-800 w-[80%] p-10 '>
        
        
        
        <h1 className='flex justify-center text-center text-[2rem] mb-10'>How to Play Password</h1>
        

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem] mb-5'>Objective</h2>
        <p className='p-3'>The objective of the game Password is for players to guess a secret word, the <span className='text-blue-300'>"password" </span> using only one-word clues provided by their partner. The team that guesses the password with first wins the round.</p>
        </div>
        


        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem] mb-5' >Game Play</h2>
        <div className='flex flex-col gap-5'>
            <p>Divide players into two teams. Each team should have at least two players.</p>
            <p>One player from each team is chosen to be the clue-giver for the first round.</p>
            <p>The clue-givers are given a password (a secret word) that they must get their teammates to guess.</p>
            <p>Clue-givers take turns giving one-word clues to their teammates to help them guess the password.</p>
            <p>If the teammate guesses the password correctly, the team scores a point. If not, the other team gets a chance to guess with the next clue.</p>
            <p>The round continues until the password is guessed or both teams pass. The team that guesses the password correctly wins the round and scores a point.</p>
            <p>After each round, new clue-givers are chosen and a new password is given.</p>
        </div>
        </div>
        

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem] mb-5' >Rules</h2>
        <ul className='flex flex-col gap-5'>
            <li>Clues cannot be the password itself or a direct variation of the password.</li>
            <li>No gestures or additional hints can be given.</li>
            <li>If a clue is deemed illegal (by the opposing team or a neutral judge), the team forfeits their turn.</li>
            <li>Teams have a limited amount of time to guess the password after each clue (if using a timer).</li>
            <li>Rhyming is not allowed</li>
        </ul>
        </div>

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem] mb-5' >Winning the Game</h2>
        <p>The first team to reach the predetermined about of points wins the game</p>
        </div>
    </div>
    </div>
    </>
  )
}
