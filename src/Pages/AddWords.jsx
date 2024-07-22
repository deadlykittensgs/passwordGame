import React, { useRef, useState } from 'react'
import Header from '../Components/Header'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'

export default function AddWords() {
  const [newWord, setNewWord] = useState("")
  const [addWord, setAddWord] = useState("")
  const [allWords, setAllWords] = useState("")

  async function addWordToFirestore(word) {
    try {
      const docRef = await addDoc(collection(db, 'words'), {
        word: word,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function submit(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    console.log("clicked")
    addWordToFirestore(newWord)
    setNewWord("")

  }


  
  return (
    <div className='bg-blue-300 flex flex-col h-screen w-screen'>
      <Header />
      <form onSubmit={submit} className='flex flex-1 flex-col justify-center items-center text-center'>
        <p>type in words to be added to the game </p>
        <input 
          required 
          name='nameofinput' 
          className='text-black w-[50%] m-[20px]' 
          type="text" 
          value={newWord} 
          onChange={(e) => setNewWord(e.target.value)} 
        />
        <button type='submit' className='bg-slate-300 p-2 rounded'>Submit</button>
      </form>

      <div className='flex flex-col flex-1 justify-center items-center'>
        <div>NewWord: {newWord}</div>
        <div>AddWord: {addWord}</div>
        <div>AllWords: {allWords}</div>
        <div></div>
      </div>
    </div>
  )
}
