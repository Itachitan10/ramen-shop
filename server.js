const express = require('express')
const app = express()
const cors = require('cors')
const conn =require('./db/database')

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000'
}))
const login = require('./routes/login')
const register = require('./routes/register')
const Product =require('./routes/product')

app.use('/' ,login)
app.use('/' , Product)
app.use('/',register)
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})

