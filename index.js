const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const viewRecipes = require('./data/viewRecipes.json')
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('recipe guru is running .....')
})
app.get('/viewRecipes', (req, res) => {
  res.send(viewRecipes)
})

app.get('/viewRecipes/:id', (req, res) => {
  const id = req.params.id;
  
  const details = viewRecipes.find(n => n.id == id);
  res.send(details)
})

app.listen(port, () => {
  console.log(`recipe guru api  running on port:  ${port}`)
})