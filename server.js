const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("connecting with local host 3000")
    res.send("Hello, connection seem working well!!!")
})
app.listen(3000)