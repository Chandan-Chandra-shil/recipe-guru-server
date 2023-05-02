const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const chefDetail = require('./data/chefDetail.json')

app.get('/', (req, res) => {
  res.send('recipe guru is running .....')
})
app.get('/chefDetail', (req, res) => {
  res.send(chefDetail)
})

app.listen(port, () => {
  console.log(`recipe guru api  running on port:  ${port}`)
})