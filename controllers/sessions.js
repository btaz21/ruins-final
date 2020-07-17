const router = require('express').Router()
const User = require("../models/users.js")
const bcrypt = require('bcrypt');
require('dotenv').config();



router.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser === null) {
        res.json({
          message: "User not found"
      })
    } else {
      const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
      if (doesPasswordMatch) {
        req.session.user = foundUser
        console.log(req.session.user);
        res.json(req.session.user)
      } else {
        res.json({
          message: "no go"
        })
      }
    }
  })
})


router.get('/', (req, res) => {
  console.log(req.session.user);
  res.json(req.session.user)
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.json({
      destroyed: true
    })
  })
})

module.exports = router
