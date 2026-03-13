import { useState } from "react"

function App() {
  const [clicks, setClicks] = useState(0)

  const handleClick = ()=> setClicks(clicks+1)
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <History clicks={clicks}/>
    </div>
  )
}

const History = ({clicks})=>{
  if(clicks==0) return <p>No click yes, try button!</p>

  return <p>Great! clicks: {clicks}</p>
}

export default App