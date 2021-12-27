const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    console.log("connecting with local host 3000")
    //res.send("Message")
    //res.download("server.js")
    //res.status(500).send("Error")
    //res.status(500).json({message: "Error"})
    res.render('index', {text: 'World'})
})

// calling the mini app
const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000)