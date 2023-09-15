const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
// const path = require('path')

// const clientpath = path.join(__dirname, './client/dist')
// app.use('/', express.static(clientpath))

const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use(cors(
  {
      origin: "http://localhost:5173",
      credentials: "true"
  }
))

app.use('/api', require('./api/users/Routers'))
app.use('/api', require('./api/brands/Router'))
app.use('/api', require('./api/categories/Router'))
app.use('/api', require('./api/products/Routers'))
app.use('/api', require('./api/orders/Router'))

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})