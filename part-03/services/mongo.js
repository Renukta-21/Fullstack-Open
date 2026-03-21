const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const phone = process.argv[4]

const MONGO_URI = `mongodb+srv://fullstack:${password}@cluster0.nd6u1.mongodb.net/settingMongoDB?appName=Cluster0`
mongoose.connect(MONGO_URI)
    .then(response => console.log('Connected succesfully to mongoDB'))
    .catch(err => console.error(err))

const personSchema = mongoose.Schema({
    name: String,
    phone: Number
})

const Person = mongoose.model('Person', personSchema)

if (name && phone) {
    const newPerson = new Person({
        name,
        phone
    })
    newPerson.save()
        .then(res => {
            console.log(`Added ${res.name} number ${phone} to phonebook`)
            mongoose.connection.close()
        })
} else {
    Person.find({})
        .then(res => {
            res.forEach(p=>{
                console.log(`${p.name.padEnd(10)} --- ${p.phone}`)
            })
            mongoose.connection.close()
        })
}
