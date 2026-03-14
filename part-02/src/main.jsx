import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Phonebook from './components/Phonebook.jsx'
import Notes from './components/Notes.jsx'
import axios from "axios"

axios.get("http://localhost:3001/notes").then(response=>{
  const notes = response.data
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Notes notes={notes}/>
    {/* <Phonebook/> */}
  </StrictMode>,
)
})

