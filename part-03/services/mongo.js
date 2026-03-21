const mongoose = require('mongoose')

const password = process.argv[2]

const MONGO_URI = `mongodb+srv://fullstack:${password}@cluster0.nd6u1.mongodb.net/?appName=Cluster0`
mongoose.connect(MONGO_URI)
    .then(response => console.log('Connected succesfully to mongoDB'))
    .catch(err => console.error(err))

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
})

const User = new mongoose.model('User', userSchema)
const newUser = new User({
    name: 'Eduardo Martinez',
    age: 21
})

newUser.save()
    .then(response => console.log(response))
    .catch(err => console.log(error))