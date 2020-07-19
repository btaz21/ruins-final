const router = require('express').Router()
const User = require("../models/users.js")
const bcrypt = require('bcrypt');
require('dotenv').config();



router.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser === null) {
        res.json({required: "Username or password invalid"})
    } else {
      const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
      if (doesPasswordMatch) {
        req.session.user = foundUser
        res.json(req.session.user)
      } else {
        res.json({required:"Username or password invalid"})
      }
    }
  })
})


router.get('/', (req, res) => {
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
