import { useState, useEffect } from 'react'
import DropdownMenu from '../Components/DropdownMenu';
import Header from '../Components/Header'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'


// init app 
function App() {

// clean usestates  
  const [teamOnePoints, setTeamOnePoints ] = useState(0)
  const [teamTwoPoints, setTeamTwoPoints ] = useState(0)
  const [word, setWord ] = useState("Ready?")
  const [clock, setClock] = useState(60)
  const [thisRound, setThisRound] = useState(0)
  const [skippedThisRound, setSkippedThisRound] = useState(0)
  const [teamOne, setTeamOne] = useState(true)
  const [StoredClock, setStoredClock] = useState("")
  
  // declare react UseState variables for firebase
  const [allWords, setAllWords] = useState([])
  const [wordElements, setWordElements] = useState([])
  const [teleWords, setTeleWords] = useState(["original word", "original word one", "original word two", "original word three"])



// words used in the game (need to be set to the firestore library)
const telephoneWords = teleWords


// fetches words from firestore and returns them as (all words) 
    async function fetchWords() {
      try {
        const querySnapshot = await getDocs(collection(db, 'words'));
        const wordsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllWords(wordsArray); // setting wordsArray to the words needed
        setWordElements(wordsArray.map(word => ({ key: word.id, value: word.word }))); // not needed?
      } catch (e) {
        console.error("Error fetching documents: ", e);
        console.log(allWords)
        console.log(wordElements)
      }
    }
  


  function submit(event) {
    event.preventDefault();
    console.log("clicked");
    addWordToFirestore(newWord);
    setNewWord("");  // Clear the input field after submission
  }
  useEffect(() => {
    fetchWords();
  }, []);
  
  

  // take the words from the firebase page
  //  and run them through a for loop to make an
  //  array and push it to the main array 
  function getWords() {

    let endArray = []

  for (let i = 0; i < allWords.length; i++) {
    endArray.push(allWords[i].word)
  }

  setTeleWords(endArray)  
  // console.log(endArray)
    // console.log(allWords[0].word)
    // console.log(allWords.length)
    // console.log(telephoneWords)
    // console.log(telephoneWords.length)
    fetchWords()
  }






  // // Use useEffect to call fetchWords on component mount.
  // useEffect(() => {
  //   fetchWords();
  // }, []);


  // // Use useEffect to call getWords after allWords is updated.
  // useEffect(() => {
  //   if (allWords.length > 0) {
  //     getWords();
  //   }
  // }, [allWords]);













// everything below this is clean 

  function getNewWord() {
    if (word == "Ready?" ) {
      let number = Math.floor(Math.random() * telephoneWords.length )
    setWord(telephoneWords[number])
    }
    else {
      return
    }
  }


  
  function correct() {
    if (clock == 0 || word == "Ready?" || word == "Next Team" ) {
      return
    }
    let number = Math.floor(Math.random() * telephoneWords.length )
    setWord(telephoneWords[number])
    scoreChange(+1)
    return
  }

  function skipWord() {
    if (clock == 0 || word == "Ready?"  || word == "Next Team" ) {
      return
    }
    setSkippedThisRound(skippedThisRound +1)
    let number = Math.floor(Math.random() * telephoneWords.length ) 
    setWord(telephoneWords[number])
  }

  function fail() {
    if (clock == 0 || word == "Ready?"  || word == "Next Team" ) {
      return
    }
    let number = Math.floor(Math.random() * telephoneWords.length )
    setWord(telephoneWords[number])
    scoreChange(-1)
    setThisRound(thisRound - 1)
  }


function scoreChange(amount) {
 
  if (teamOne == true ) {
    let newScore = teamOnePoints + amount
    setTeamOnePoints(newScore)
  }
  if (teamOne == false ) {
    console.log(teamOne)
    let newScore = teamTwoPoints + amount
    setTeamTwoPoints(newScore)
  }

}


function changeTeam() {

  if (word == "Next Team" && teamOne == false ) {
    setTeamOne(true)
    nextTurn() 
  } 
  if (word == "Next Team" && teamOne == true) {
    setTeamOne(false)
    nextTurn() 
  }
  
  else {
return
  }
}

function nextTurn() {
  setThisRound(0)
  setSkippedThisRound(0)
 setWord("Ready?")
 setClock(StoredClock)
}



function WhosTurn() {

  let team = teamOne
  
 if (team == true) {
return ( <div className='flex items-center justify-center border-solid border-[1px] rounded-full p-1 gap-1 text-center'><i className="fa-solid fa-arrow-left"></i> <p>Red Team</p> </div>)
 } else {
  return (<div className='flex items-center justify-center border-solid border-[1px] rounded-full p-1 gap-1 text-center' > <p>Blue Team</p>  <i className="fa-solid fa-arrow-right"></i></div>)
 }
  
}




function countdown(startNumber) {

  if (!startNumber == clock ) {
    return
  }
  if (word == "Next Team") {
    return
  } else {


  let currentNumber = startNumber;
 

  const intervalId = setInterval(() => {
    currentNumber -= 1;
    setClock(currentNumber)

    if (currentNumber <= 0) {
      clearInterval(intervalId);
      setWord("Next Team")
    }
  },  1000 );
}}


function clockTimeAdjust( difference) {
  if (clock == 0 && difference < 0 || clock == 990 && difference > 0 ) {
    return
  } else {
    setClock(clock + difference)
    setStoredClock(clock)
  }
 
}


function start() {
  if (clock == 0) {
    return
  } else {
    setStoredClock(clock)
    countdown(clock)
    getNewWord()
  }
 
}

  return (
<div className='flex flex-1 flex-col h-screen w-screen'>
<Header/>
  <div className='flex w-page '>
  <div className='flex flex-col bg-gradient-to-r from-rose-500 to-pink-500 items-center justify-center p-2 text-center w-[35%]'>
<div onClick={() => { setTeamOnePoints(teamOnePoints + 1)}} className=' flex items-center justify-center '>+</div>
<div>Red Team: {teamOnePoints}</div>
 <div onClick={() => { setTeamOnePoints(teamOnePoints - 1)}} className=' flex items-center justify-center' >-</div>
</div>
  <div onClick={changeTeam} className=' flex-1 flex justify-center items-center bg-gradient-to-l from-sky-500 via-violet-600 to-pink-500'> <WhosTurn/> </div>
  <div className='flex flex-col bg-gradient-to-r from-sky-500 to-blue-500 items-center justify-center p-2 text-center w-[35%]'>
<div onClick={() => { setTeamTwoPoints(teamTwoPoints + 1)}} className=' flex items-center justify-center '>+</div>
<div>Blue Team: {teamTwoPoints}</div>
 <div onClick={() => { setTeamTwoPoints(teamTwoPoints - 1)}} className=' flex items-center justify-center' >-</div>
</div>
  </div>

<div className=' text-[2.5rem] flex min-h-[60%] items-center justify-center background'>{word}</div>

<div className='flex flex-1 items-center justify-center gap-6 h-[100px] bg-gradient-to-l from-pink-500 via-violet-600 to-sky-500 '>
<button onClick={correct } className=' w-[20%] bg-gradient-to-r from-green-400 via-green-300 to-green-400 rounded p-2'><i className="fa-solid fa-thumbs-up"></i></button>
<button onClick={skipWord} className=' w-[20%] bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 rounded p-2' ><i className="fa-solid fa-forward"></i></button>
<button onClick={fail} className=' w-[20%] bg-gradient-to-r from-red-400 via-red-300 to-red-400 rounded p-2'><i className="fa-solid fa-thumbs-down"></i></button>
</div>
<div className='flex justify-between h-[75px]'> 

<div className='flex flex-1'>
<div className='flex justify-center items-center flex-1 bg-gradient-to-r from-slate-500 to-slate-800'> <DropdownMenu/></div>
{/* optional button for later  */}
{/* <button  className='flex justify-center items-center flex-1 bg-sky-200'><i className="fa-solid fa-rotate-right text-black"></i></button> */}
</div>

<div className='flex flex-1 flex-col background'>
<p className='flex justify-center items-center flex-1'>Guessed: {thisRound} </p>
<p className='flex justify-center items-center flex-1'>Skipped: {skippedThisRound} </p>
</div>

<div className='flex justify-center items-center flex-1  bg-gradient-to-l from-slate-600 to-slate-400  ' >

 <div className='flex flex-col flex-1 h-[100%] w-[100%] items-center '>
  <div onClick={() => {clockTimeAdjust(10)}} className=' flex items-center justify-center'>+</div>
  <div className='flex flex-1 justify-center items-center px-2 w-[50px] text-ellipsis overflow-auto whitespace-nowrap'> {clock}'s</div>
 <div onClick={() => {clockTimeAdjust(-10)}} className=' flex items-center justify-center' >-</div>
 </div>


 
  <div className='flex flex-col flex-1 h-[100%] w-[100%] items-center '>
    <div onClick={start} className=' flex w-[100%] h-[100%] flex-1 bg-green-500 justify-center items-center'>Start</div>
    {/* stop button to be added to timer */}
    {/* <div className=' flex w-[100%] flex-1 bg-red-500 justify-center items-center'>Stop</div> */}
  </div>
</div>


</div>

  
</div>
  
  )
}

export default App
