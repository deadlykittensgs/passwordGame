import React from 'react'
import Header from '../Components/Header'

export default function Rules() {
  return (

    <>
     <Header/>
    <div className='flex justify-center bg-blue-800'>
       
        <div className='bg-blue-900 w-[80%] p-10'>
        
        
        
        <h1 className='flex justify-center text-center text-[2rem] mb-10'>How to Play Password</h1>
        

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem]'>Objective</h2>
        <p className='p-3'>The objective of Password is for players to guess a secret word (the "password") using one-word clues provided by their partner. The team that guesses the password with the fewest clues wins the round.</p>
        </div>
       

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem]' >Setup</h2>
        <p>To play Password, you will need:</p>
        <ul>
            <li>A group of 4 or more players</li>
            <li>Word cards or a list of passwords</li>
            <li>Timer (optional)</li>
        </ul>
        </div>
        


        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem]' >Game Play</h2>
        <ol>
            <li>Divide players into two teams. Each team should have at least two players.</li>
            <li>One player from each team is chosen to be the clue-giver for the first round.</li>
            <li>The clue-givers are given a password (a secret word) that they must get their teammates to guess.</li>
            <li>Clue-givers take turns giving one-word clues to their teammates to help them guess the password.</li>
            <li>If the teammate guesses the password correctly, the team scores a point. If not, the other team gets a chance to guess with the next clue.</li>
            <li>The round continues until the password is guessed or both teams pass. The team that guesses the password correctly wins the round and scores a point.</li>
            <li>After each round, new clue-givers are chosen and a new password is given.</li>
        </ol>
        </div>
        

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem]' >Rules</h2>
        <ul>
            <li>Clues must be only one word and cannot be the password itself or a direct variation of the password.</li>
            <li>No gestures or additional hints can be given.</li>
            <li>If a clue is deemed illegal (by the opposing team or a neutral judge), the team forfeits their turn.</li>
            <li>Teams have a limited amount of time to guess the password after each clue (if using a timer).</li>
        </ul>
        </div>

        <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[1.3rem]' >Winning the Game</h2>
        <p>The game can be played to a predetermined number of points, such as 10. The first team to reach the set number of points wins the game.</p>
        </div>
    </div>
    </div>
    </>
  )
}
