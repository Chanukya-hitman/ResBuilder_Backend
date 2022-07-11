const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())

const dbConnect = require('./dbConnect')

app.use(express.json())

const port = 5000

const userRoute = require('./routes/userRoute')

app.use('/api/users', userRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))