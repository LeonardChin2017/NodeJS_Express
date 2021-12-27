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

// dynamic route
router.get("/:id", (req, res)=>{
    var userid = req.params.id
    res.json({message: userid})
})

module.exports = router
