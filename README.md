# NodeJS_Express
Repository to keep my learning material for node js.

---

### Setup
```
npm init -y 
npm i express
npm i --saved-dev nodemon
npm i ejs
npm run StartDev
```

---

### Boilerplate

#### #1
Feedback some text when user trying to connect to server.

server.js
```
const express = require('express)
const app = express()

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3000)

```

#### #2
Render the HTML using ejs.

#####Pre-requisites:
Create index.html.

server.js
```
const express = require('express)
const app = express()

app.set("view-engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000)

```

#### #3
Passing data from backend to front end

#####Pre-requisites:
Create index.ejs.

index.ejs
```
<!DOCTYPE html>
<html lang='en'>
    <head>
        <title> Document </title>
    </head>
    <body>
        <p> 
            Hello <%= locals.text || 'Default' %> 
        </p>
    </body>
</html>
```

server.js
```
const express = require('express)
const app = express()

app.set("view-engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {text: "World"})
})

app.listen(3000)

```

#### #4
Route

users.js

```
const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("User List")
})

router.get("/new", (req, res)=>{
    res.send("User New Form")
})

router.post("/", (req, res)=>{
    res.send("Create user with id " + req.body.firstName)
})

router
    .route("/:id")
    .get((req, res) =>{
        console.log(req.user)
        var userid = req.params.id
        res.send("Get user id " + userid)
    })
    .put((req, res) =>{
        var userid = req.params.id
        res.send("update user id " + userid)
    })
    .delete((req, res) => {
        var userid = req.params.id
        res.send("delete user id " + userid)
    })

module.exports = router
```

server.js
```
const express = require('express')
const app = express()

app.set('view engine', 'ejs')


// can have as many logger as I want
app.get('/', (req, res)=>{
    console.log("connecting with local host 3000")
})

// route
const userRouter = require('./routes/users')
app.use('/users', userRouter)

```

#### #5
Post request from front end to backend

index.ejs
```
<form action="/users" method="POST">
    <label> 
        <input type="text" name="firstName" value="<%= locals.firstName %>"/>
    </label>
    <button type="submit"> Submit </button>
</form>
```

users.js
```
router.post("/", (req, res)=>{
    res.send("Create user with id " + req.body.firstName)
})
```

#### #6
Middleware

users.js
```
const users = [{name: "Kyle"}, {name: "Sally"}]
// param is the middle, it run between the request being send to server and the actual response send to user
// get, put, delete are response to user
// it need to call next to proceed
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})
```

#### #7
static HTML files

server.js
```
app.use(express.static("public"))
```
