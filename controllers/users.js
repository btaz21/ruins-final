const router = require('express').Router()
const User = require("../models/users.js")
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.password.length === 0) {
    res.json({required:"Password required"})
  } else if (req.body.password.length < 6) {
    res.json({minlength:"Password must be at least 6 characters"})
  } else {
    const salt = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.password = salt
    User.create(req.body, (error, createdUser) => {
      if (error) {
        res.json(error)
      } else {
        res.json(createdUser)
      }
    })
  }
})


router.get('/', (req, res) => {
  User.find({}, (err, allUsers) => {
    res.json(allUsers)
  })
})



module.exports = router;
