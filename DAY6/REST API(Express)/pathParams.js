const mobile=require('./mobile_companies.json')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))

app.get('/:product/:id', (req, res) => {
let id=req.params.id
if(req.params.product="mobiles")
  res.send(mobile.mobile_companies[id-1])
else if(req.params.product="laptops")
    res.send(mobile.mobile_companies[id-1])

})
