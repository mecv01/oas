const express = require('express')
const app = express()
const port = 3000
const myObject = {
  	"orderId": 1234567890,
  	"customer": "1234567890",
  	"numberOfProductsInOrder": 10
};

app.get('/orders/:id', (req, res) => {   
  res.json(myObject)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
