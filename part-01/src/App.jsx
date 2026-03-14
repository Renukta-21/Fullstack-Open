import { useState } from "react"
import Statistics from "./Statistics"

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handlebadClick = () => setBad(bad + 1)

  const total = good + bad + neutral
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handlebadClick}>Bad</button>
      <h3>Statistics</h3>
      <div>
      </div>
      <Statistics total={total} reviews={{bad, good, neutral}}/>
    </div>
  )
}


export default App