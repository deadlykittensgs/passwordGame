import { useState } from 'react'

import classNames from 'classnames';




const telephoneWords = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
  "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
  "apricot", "blueberry", "cantaloupe", "dragonfruit", "eggplant", "feijoa", "grapefruit",
  "huckleberry", "imbe", "jackfruit", "kumquat", "lime", "mulberry", "nectar", "olive",
  "peach", "plum", "quinoa", "radish", "starfruit", "tomato", "ugli fruit", "victoria plum",
  "wolfberry", "xylocarp", "yellow watermelon", "ziziphus", "acai", "blackberry", "cranberry",
  "durian", "elder", "figberry", "goji", "hackberry", "illawarra", "jabuticaba", "kiwano",
  "lychee", "melon", "nashi", "oliveberry", "pineapple", "pear", "quinine", "rambutan",
  "soursop", "tangelo", "ugni", "vanilla bean", "watercress", "ximenia", "yew", "zinfandel",
  "alfalfa", "bean", "carrot", "daikon", "endive", "fennel", "garlic", "horseradish", "iceberg",
  "jalapeno", "kale", "leek", "mustard", "onion", "pepper", "quash", "rutabaga", "spinach",
  "turnip", "ugni berry", "vegetable marrow", "water chestnut", "xanthan", "yam bean", "zostera",
    "car", "house", "tree", "computer", "keyboard", "mouse", "laptop", "phone",
    "television", "sofa", "bed", "table", "chair", "window", "door", "lamp",
    "book", "notebook", "pen", "pencil", "eraser", "sharpener", "backpack", "shoes",
    "hat", "jacket", "gloves", "scarf", "umbrella", "watch", "bracelet", "necklace",
    "ring", "earrings", "socks", "sandals", "belt", "wallet", "key", "sunglasses",
    "guitar", "piano", "violin", "drum", "flute", "trumpet", "clarinet", "saxophone",
    "microphone", "speaker", "camera", "lens", "tripod", "flash", "battery", "charger",
    "cable", "adapter", "plug", "socket", "switch", "bulb", "fan", "heater",
    "air conditioner", "microwave", "oven", "stove", "fridge", "freezer", "blender",
    "toaster", "kettle", "coffeemaker", "mixer", "grinder", "juicer", "food processor",
    "rice cooker", "slow cooker", "pressure cooker", "steamer", "fryer", "grill",
    "barbecue", "dishwasher", "washing machine", "dryer", "iron", "vacuum", "broom",
    "mop", "bucket", "duster", "sponge", "scrubber", "cleaner", "detergent", "soap",
    "shampoo", "conditioner", "toothbrush", "toothpaste", "floss", "razor", "shaver",
    "towel", "bathrobe", "slippers", "mattress", "pillow", "blanket", "sheet",
    "comforter", "duvet", "curtain", "blind", "rug", "carpet", "doormat", "bin",
    "recycle bin", "compost bin", "trash can", "broomstick", "dustpan", "feather duster",
    "bucket hat", "cap", "beanie", "headband", "hair tie", "hair clip", "hair brush",
    "comb", "hair dryer", "straightener", "curler", "hair gel", "hair spray", "mousse",
    "pomade", "wax", "shaving cream", "aftershave", "lotion", "moisturizer", "sunscreen",
    "lip balm", "makeup", "foundation", "concealer", "powder", "blush", "bronzer",
    "highlighter", "eye shadow", "mascara", "eyeliner", "brow pencil", "lipstick",
    "lip gloss", "lip liner", "nail polish", "nail file", "nail clipper", "cuticle pusher",
    "cuticle oil", "hand cream", "body lotion", "body wash", "scrub", "exfoliator",
    "loofah", "bath bomb", "bath salts", "bubble bath", "bath oil", "shower gel",
    "body mist", "perfume", "cologne", "deodorant", "antiperspirant", "foot cream",
    "foot scrub", "foot file", "foot soak", "foot spray", "foot powder", "eye cream",
    "face mask", "face wash", "face scrub", "toner", "serum", "essence", "ampoule",
    "sheet mask", "sleeping mask", "peel", "spot treatment", "acne patch", "pimple cream",
    "blackhead remover", "pore strip", "makeup remover", "cleansing oil", "cleansing balm",
    "cleansing water", "cotton pad", "cotton ball", "tissue", "q-tip", "swab",
    "facial roller", "gua sha", "face brush", "face sponge", "makeup brush", "beauty blender",
    "powder puff", "mirror", "magnifying mirror", "compact mirror", "travel mirror", "toilet paper",
    "paper towel", "napkin", "handkerchief", "tissue paper", "paper plate", "paper cup",
    "plastic fork", "plastic spoon", "plastic knife", "plastic straw", "plastic bag",
    "plastic wrap", "aluminum foil", "parchment paper", "wax paper", "cling film",
    "food storage", "lunch box", "water bottle", "thermos", "ice pack", "cooler",
    "picnic basket", "picnic blanket", "lunch bag", "snack bag", "bento box",
    "bread", "butter", "cheese", "milk", "yogurt", "cream", "ice cream", "gelato",
    "sorbet", "frozen yogurt", "popsicle", "milkshake", "smoothie", "juice", "soda",
    "cola", "lemonade", "iced tea", "coffee", "tea", "espresso", "latte", "cappuccino",
    "mocha", "americano", "macchiato", "affogato", "frappe", "matcha", "chai",
    "hot chocolate", "cider", "beer", "wine", "champagne", "cocktail", "mocktail",
    "whiskey", "vodka", "rum", "tequila", "gin", "brandy", "liqueur", "absinthe",
    "bourbon", "scotch", "moonshine", "mead", "sake", "soju", "grappa", "vermouth",
    "aperitif", "digestif", "port", "sherry", "cognac", "armagnac", "calvados",
    "pisco", "baijiu", "shoju", "beverage", "drink", "potion", "elixir", "tonic",
    "syrup", "nectar", "brew", "infusion", "decoction", "tincture", "concoction",
    "draft", "toddy", "punch", "sling", "spritzer", "highball", "lowball",
    "julep", "fizz", "cooler",
  
];


function App() {
  const [teamOnePoints, setTeamOnePoints ] = useState(0)
  const [teamTwoPoints, setTeamTwoPoints ] = useState(0)
  const [word, setWord ] = useState("Ready?")
  const [clock, setClock] = useState(60)
  const [thisRound, setThisRound] = useState(0)
  const [skippedThisRound, setSkippedThisRound] = useState(0)
  const [teamOne, setTeamOne] = useState(true)
  const [StoredClock, setStoredClock] = useState("")


  function getNewWord() {
    if (word == "Ready?" ) {
      let number = Math.floor(Math.random() * telephoneWords.length ) + 1
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
    console.log("clicked")
    let number = Math.floor(Math.random() * telephoneWords.length ) + 1
    setWord(telephoneWords[number])
    console.log(word)
    scoreChange(1)
    setThisRound(thisRound + 1)
    return
  }

  function skipWord() {
    if (clock == 0 || word == "Ready?"  || word == "Next Team" ) {
      return
    }
    setSkippedThisRound(skippedThisRound +1)
    let number = Math.floor(Math.random() * telephoneWords.length ) + 1
    setWord(telephoneWords[number])
  }

  function fail() {
    if (clock == 0 || word == "Ready?"  || word == "Next Team" ) {
      return
    }
    let number = Math.floor(Math.random() * telephoneWords.length ) + 1
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
return ( <><i className="fa-solid fa-arrow-left"></i> <p>Red Team</p> </>)
 } else {
  return (<> <p>Blue Team</p>  <i className="fa-solid fa-arrow-right"></i></>)
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

<div className='flex flex-1 flex-col h-screen w-screen bg-gray-950'>
  <div className='flex w-page justify-between bg-gray-950'>
  <div className='flex flex-col bg-red-800 items-center justify-center p-2 text-center w-[35%]'>
<div onClick={() => { setTeamOnePoints(teamOnePoints + 1)}} className=' flex items-center justify-center '>+</div>
<div>Red Team: {teamOnePoints}</div>
 <div onClick={() => { setTeamOnePoints(teamOnePoints - 1)}} className=' flex items-center justify-center' >-</div>
</div>
  <div onClick={changeTeam} className=' flex justify-center items-center bg-gray-950'> <WhosTurn/> </div>
  <div className='flex flex-col bg-blue-500 items-center justify-center p-2 text-center w-[35%]'>
<div onClick={() => { setTeamTwoPoints(teamTwoPoints + 1)}} className=' flex items-center justify-center '>+</div>
<div>Blue Team: {teamTwoPoints}</div>
 <div onClick={() => { setTeamTwoPoints(teamTwoPoints - 1)}} className=' flex items-center justify-center' >-</div>
</div>
  </div>

<div className=' text-[2.5rem] flex flex-1 min-h-[70%] items-center justify-center background'>{word}</div>

<div className='flex flex-1 items-center justify-center gap-6'>
<button onClick={correct } className=' w-[20%] bg-green-400 rounded p-2'><i className="fa-solid fa-thumbs-up"></i></button>
<button onClick={skipWord} className=' w-[20%] bg-slate-500 rounded p-2' ><i className="fa-solid fa-forward"></i></button>
<button onClick={fail} className=' w-[20%] bg-red-400 rounded p-2'><i className="fa-solid fa-thumbs-down"></i></button>
</div>
<div className='flex justify-between'> 

<div className='flex flex-1'>
<button className='flex justify-center items-center flex-1 bg-slate-600'><i class="fa-solid fa-bars"></i></button>
<button className='flex justify-center items-center flex-1 bg-slate-600'><i className="fa-solid fa-gear"></i></button>
</div>

<div className='flex flex-1 flex-col background'>
<p className='flex justify-center items-center flex-1'>Guessed: {thisRound} </p>
<p className='flex justify-center items-center flex-1'>Skipped: {skippedThisRound} </p>
</div>

<div className='flex justify-center items-center flex-1 bg-slate-600' >
 <div className='flex flex-1 justify-center'> 
 <div className='flex flex-col flex 1 w-[25px] bg-slate-700'>
  <div onClick={() => {clockTimeAdjust(10)}} className=' flex items-center justify-center'>+</div>
 <div onClick={() => {clockTimeAdjust(-10)}} className=' flex items-center justify-center' >-</div>
 </div>
 <div className='flex flex-1 justify-center items-center px-2 w-[50px] text-ellipsis overflow-auto whitespace-nowrap'> {clock}'s</div>
 </div>
  <div className='flex flex-col flex-1 h-[100%] w-[100%] items-center '>
    <div onClick={start} className=' flex w-[100%] h-[100%] flex-1 bg-green-500 justify-center items-center'>start</div>
    {/* <div className=' flex w-[100%] flex-1 bg-red-500 justify-center '>pause</div> */}
  </div>
</div>


</div>

  
</div>
  
  )
}

export default App
