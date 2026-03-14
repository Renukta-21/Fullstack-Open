import { useState } from "react"
import './phonebook.css'

function Phonebook() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: userInput
    }
    setPersons(persons.concat(newPerson))
    setUserInput('')
  }
  return (
    <div>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputNewUser">name</label>
        <input type="text" id="inputNewUser" value={userInput} onChange={(e)=> setUserInput(e.target.value)}/>
        <button>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => <tr><td>{p.name}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Phonebook