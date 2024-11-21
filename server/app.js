const express = require('express')
const dotenv = require('dotenv')
const bodyPraser = require('body-parser')
const db = require('./src/config/db')
const cors = require('cors')
const registerRoute = require('./src/routes/registerRoute')
const addTaskRoute = require('./src/routes/addTask')
const app = express()
app.use(cors())
dotenv.config()

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err)
    process.exit(1)
  }
  console.log('Connected to MySQL!')
})

app.use(bodyPraser.json())
app.use('/tasktrack', registerRoute)
app.use('/tasktrack', addTaskRoute)

app.listen(3001)
