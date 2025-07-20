const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port: ${port}`))
