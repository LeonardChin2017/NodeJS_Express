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

module.exports = router
