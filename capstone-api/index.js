require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030

app.use(cors())
app.use(express.json())

const medicationRoutes = require('./routes/medicationRoute')
const entryRoutes = require('./routes/entryRoute')

app.get('/', (_req, res) => {
	res.send('Medicine Cabinet Back End API!')
})

app.use(express.static('public'))

app.use('/medications', medicationRoutes)
app.use('/entries', entryRoutes)

app.listen(PORT, () => {
	console.log(`Running Node on ${PORT}`)
})
