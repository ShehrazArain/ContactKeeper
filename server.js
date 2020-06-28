const express = require('express')
//var bodyParser = require('body-parser')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))


app.get('/', (req, res) => res.json({ msg: "Contact Keeper API" }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contact'))
app.use('/api/auth', require('./routes/auth'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))