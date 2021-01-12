const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const root = require('rootrequire')

const port = process.env.port || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

const authRouter = require('./routes/auth')
const regUserRouter = require('./routes/regUser')


// set routes
// app.use('/', express.static(path.join(__dirname, 'client/dist')))
// app.use('/', root+'client/dist')
app.use('/auth', authRouter)
app.use('/regUser', regUserRouter)

app.listen(port, () =>{
  console.log('**Server started**')
})