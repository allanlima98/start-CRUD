const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const carteiraRoute = require('./routes/carteiraRoute')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json('OK')
})

app.use(userRoute)
app.use(carteiraRoute)

app.listen(PORT, () => {
  console.log(`Running server on ${PORT}`)
})
