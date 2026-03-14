import { useState } from "react"

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = ()=> setGood(good+1)
  const handleNeutralClick = ()=> setNeutral(neutral+1)
  const handlebadClick = ()=> setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handlebadClick}>Bad</button>
      <h3>Statistics</h3>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
      <Average good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
const Average = ({good, neutral, bad})=>{
  return <p>{(good * 1+neutral*0+bad*-1)/3}</p>
}

export default App