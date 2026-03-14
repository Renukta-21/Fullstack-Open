import { useState } from "react"
import './phonebook.css'

function Phonebook() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '5640548811' }
  ])
  const [userInput, setUserInput] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.some(p => p.name === userInput)) {
      alert(`${userInput} already exists`)
      return
    }
    const newPerson = {
      name: userInput,
      phone
    }
    setPersons(persons.concat(newPerson))
    setUserInput('')
    setPhone('')
  }
  return (
    <div>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputNewUser">name</label>
          <input type="text" id="inputNewUser" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        </div>
        <div>
          <label htmlFor="inputPhone">Phone</label>
          <input type="text" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.phone}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Phonebook