const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("User List")
})

router.get("/new", (req, res)=>{
    res.send("User New Form")
})

router.post("/", (req, res)=>{
    res.send('Create user')
})

// cleaner way
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

// // dynamic route || dirty way
// router.get("/:id", (req, res)=>{
//     var userid = req.params.id
//     //res.json({message: userid})
//     res.send("Get user id " + userid)
// })

// router.put("/:id", (req, res)=>{
//     var userid = req.params.id
//     //res.json({message: userid})
//     res.send("update user id " + userid)
// })


// router.delete("/:id", (req, res)=>{
//     var userid = req.params.id
//     //res.json({message: userid})
//     res.send("delete user id " + userid)
// })

const users = [{name: "Kyle"}, {name: "Sally"}]
// param is the middle, it run between the request being send to server and the actual response send to user
// get, put, delete are response to user
// it need to call next to proceed
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})

module.exports = router
