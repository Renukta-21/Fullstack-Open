import { useState } from "react"
import './phonebook.css'

function Phonebook() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: e.target.inputNewUser.value
    }
    setPersons(persons.concat(newPerson))
  }
  return (
    <div>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputNewUser">name</label>
        <input type="text" id="inputNewUser" />
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