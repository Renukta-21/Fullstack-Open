import { useState } from "react"
import StatisticsLine from "./StatisticsLine"

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
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handlebadClick} text='bad' />

      <h3>Statistics</h3>
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />

      <div>
        {total === 0 ? <p>No reviews yet</p>
          : <div>
            <Average total={total} reviews={{ good, neutral, bad }}/>
            <Positive good={good} total={total}/>
          </div> }

      </div>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}
const Average = ({ total, reviews }) => {
  return <p>{(reviews.good * 1 + reviews.neutral * 0 + reviews.bad * -1) / total}</p>
}
const Positive = ({ good, total }) => {
  return <p>Positive {(good / total) * 100} %</p>
}

export default App