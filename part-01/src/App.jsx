import { useState } from "react"

import './app.css'
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



      <div>
        {total === 0 ? <p>No reviews yet</p>
          : <div>
            <h3>Statistics</h3>
            <table style={{
              borderCollapse: 'collapse',
              marginTop: '10px'
            }}>
              <tbody>
                <tr>
                  <td>Good</td>
                  <td>{good}</td>
                </tr>
                <tr>
                  <td>Neutral</td>
                  <td>{neutral}</td>
                </tr>
                <tr>
                  <td>Bad</td>
                  <td>{bad}</td>
                </tr>
                <tr>
                  <td>Average</td>
                  <td><Average total={total} reviews={{ good, neutral, bad }} /></td>
                </tr>
                <tr>
                  <td>Positive</td>
                  <td><Positive good={good} total={total} /></td>
                </tr>
              </tbody>
            </table>
          </div>}

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
  return <p>{(good / total) * 100} %</p>
}

export default App