const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.resolve(__dirname, 'public')))
app.use('/src', express.static(path.resolve(__dirname, 'src')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(5000, () => console.log('Server is running on port 5000...'))
