const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./db')

const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 4001



app.listen(port, () => {
    console.log('Express API listening on port 4001')
  })
