const express = require('express')
const app = express()
const port = 3000
const path =require("path")

app.use("/public", express.static(path.join(`${__dirname}/../frontend/dist`)));

app.get('/', (req, res) => {
  res.send({"name": "Béla"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
