const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('recipe guru is running .....')
})

app.listen(port, () => {
  console.log(`recipe guru api  running on port:  ${port}`)
})