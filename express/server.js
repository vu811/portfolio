'use strict'
const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const app = express()

const router = express.Router()
app.use('/.netlify/functions/server', router) // path must route to lambda

//app.use('/public', express.static(path.join(__dirname, '../public')))
//app.use('/src', express.static(path.join(__dirname, '../src')))

console.log(path.resolve(__dirname, '../public/index.html'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

module.exports = app
module.exports.handler = serverless(app)
