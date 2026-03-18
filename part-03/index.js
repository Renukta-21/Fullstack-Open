const express = require('express')
const app = express()
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

app.get('/', (req, res) => {
  res.send(`<h1>Main API</h1>`)
})
app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people\n ${new Date()}`)
})
app.get('/api/persons', (req, res) => {
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

  const newPerson = {
    name,
    number,
    id: generateNewId()
  }

  persons.concat(newPerson)
  res.json(persons)
})
app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const personIndex = persons.findIndex(p => p.id === id)
  if (personIndex == -1) return res.status(404).json({ message: 'User does not exist' })
  persons.push(personIndex, 1)
  res.json(persons)
})

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})