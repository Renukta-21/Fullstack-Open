import { useEffect, useState } from "react"
import './phonebook.css'
import axios from "axios"
import phonebookService from '../services/phonebook'
import Notification from './Notification'

function Phonebook() {
  const [persons, setPersons] = useState([])
  /* useEffect(() => {
    const {data} = axios.get("http://localhost:3001/persons")
    setPersons(data)
  }, []) */
  useEffect(() => {
    const response = phonebookService.getAll()
      .then(response => setPersons(response))
  }, [])


  const [userInput, setUserInput] = useState('')
  const [number, setNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)

  const filteredPersons = nameFilter
    ? persons.filter(p => p.name.includes(nameFilter))
    : persons

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userInput || !number) {
      alert("Name and number are required")
      return
    }

    if (persons.some(p => p.name === userInput)) {
      if (!window.confirm(`${userInput} is already added to the phonebook, replace the old number with the new one?`)) return
      console.log(`${persons.find(p => p.name == userInput)} will be replaced with following number ${number}`)

      const userToUpdate = persons.find(p => p.name == userInput)
      userToUpdate.number = number
      phonebookService.updateUser(userToUpdate)
        .then(updatedUser => setPersons(persons.map(p => p.id == userToUpdate.id ? updatedUser : p)))
      setUserInput('')
      setNumber('')

      return
    }
    const newPerson = {
      name: userInput,
      number
    }

    phonebookService.add(newPerson)
      .then(addedPerson => setPersons(persons.concat(addedPerson)))

    console.log(persons)
    setMessage(`${userInput} has been added succesfully :)`)
    setTimeout(()=> setMessage(null), 3000)
    setUserInput('')
    setNumber('')
    
  }

  const handleDelete = (id, name) => {
    if (!window.confirm(`Are you sure you want to delete ${name}`)) return

    phonebookService.deleteUser(id)
      .then(deletedUser => setPersons(persons.filter(p => p.id !== id)))
      .catch(error => console.log(error.response.data))
  }
  return (
    <div>
      <h3>Phonebook</h3>
      <Notification message={message} type='success' />
      <PersonForm handleSubmit={handleSubmit} userInput={userInput} setUserInput={setUserInput} number={number} setNumber={setNumber} />
      <div style={{
        marginTop: '25px'
      }}>
        <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      </div>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
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

const PersonForm = ({ handleSubmit, setUserInput, userInput, number, setNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputNewUser">name</label>
        <input type="text" id="inputNewUser" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      </div>
      <div>
        <label htmlFor="inputPhone">Phone</label>
        <input type="text" id="inputPhone" value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <button>Add</button>
    </form>
  )
}
const Persons = ({ filteredPersons, handleDelete }) => {
  if (!filteredPersons) return <p>No persons yet</p>

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredPersons.map(p => <tr key={p.id}>
        <td>{p.name}</td>
        <td>{p.number}</td>
        <td><button onClick={() => handleDelete(p.id, p.name)}>Delete</button></td>
      </tr>)}
    </tbody>
  </table>
}
export default Phonebook