const express = require('express')
const app = express()

app.use(express.static("public"))

app.set('view engine', 'ejs')
// app.use(logger) // middle need to defined on the top


// can have as many logger as I want
app.get('/', logger, (req, res)=>{
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

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)