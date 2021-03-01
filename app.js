const express = require('express')
const app = express()
 
app.get('/api/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6/Total-Supply', function (req, res) {
  res.send('137865569')
})
 
app.listen(3000)