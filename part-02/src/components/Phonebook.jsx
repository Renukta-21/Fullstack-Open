import { useEffect, useState } from "react"
import './phonebook.css'
import axios from "axios"

function Phonebook() {
  const [persons, setPersons] = useState([])
  /* useEffect(() => {
    const {data} = axios.get("http://localhost:3001/persons")
    setPersons(data)
  }, []) */
  useEffect(() => {
    const response = axios.get("http://localhost:3001/persons")
    .then(response=> setPersons(response.data))
  }, [])
  
  
  const [userInput, setUserInput] = useState('')
  const [phone, setPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const filteredPersons = nameFilter
    ? persons.filter(p => p.name.includes(nameFilter))
    : persons

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
      <PersonForm handleSubmit={handleSubmit} userInput={userInput} setUserInput={setUserInput} phone={phone} setPhone={setPhone} />
      <div style={{
        marginTop: '25px'
      }}>
        <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      </div>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}
const Filter = ({ nameFilter, setNameFilter }) => {
  return (
    <>
      <label htmlFor="filter">Filter</label>
      <input type="text" id="filter" placeholder="Search by name" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} /></>
  )
}

const PersonForm = ({ handleSubmit, setUserInput, userInput, phone, setPhone }) => {
  return (
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
  )
}
const Persons = ({ filteredPersons }) => {
  if(!filteredPersons) return <p>No persons yet</p>

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {filteredPersons.map(p => <tr key={p.name}>
        <td>{p.name}</td>
        <td>{p.phone}</td>
      </tr>)}
    </tbody>
  </table>
}
export default Phonebook