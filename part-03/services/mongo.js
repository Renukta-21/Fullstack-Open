const mongoose = require('mongoose')

const password = process.argv[2]

const MONGO_URI = `mongodb+srv://fullstack:${password}@cluster0.nd6u1.mongodb.net/settingMongoDB?appName=Cluster0`
mongoose.connect(MONGO_URI)
    .then(response => console.log('Connected succesfully to mongoDB'))
    .catch(err => console.error(err))

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
})

const User = new mongoose.model('User', userSchema)
const newUser = new User({
    name: 'Daniel Urbina',
    age: 23
})

newUser.save()
    .then(response => console.log(response))
    .catch(err => console.log(error))
User.find({})
.then(result=> console.log(result))
.catch(err=> console.log(err))