const express = require('express')
const app = express()
const requestLogger = require('./middlewares/logger')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

const generateNewId = () => {
  const maxId = Math.max(...persons.map(p => Number(p.id)))
  if (persons.length === 0) return 1
  return maxId + 1
}

app.use(express.json())
app.use(requestLogger)
app.use(cors())
/* app.use(express.static('dist')) */

app.get('/', (req, res) => {
  res.send(`<h1>Main API</h1>`)
})
app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people\n ${new Date()}`)
})
app.get('/api/persons', (req, res) => {
  /* console.log(persons) */
  res.json(persons)
})
app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = persons.find(p => p.id === id)
  if (!person) return res.status(404).send({ error: 'Person was not find' })
  res.send(person)
})
app.post('/api/persons', (req, res) => {
  const { name, number } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'name and number are required' })
  }

  const alreadyExists = persons.some(p=>p.name.toLowerCase()===name.toLowerCase())
  if(alreadyExists) return res.status(409).json({error:'User already exists, name must be unique'})

  const newPerson = {
    name,
    number,
    id: generateNewId()
  }

  persons.push(newPerson)
  res.json(newPerson)
})
app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const personIndex = persons.findIndex(p => p.id === id)
  if (personIndex == -1) return res.status(404).json({ message: 'User does not exist' })
  persons.splice(personIndex, 1)
  res.status(204).end()
})

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})