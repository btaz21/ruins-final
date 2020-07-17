const router = require('express').Router()
const Ruin = require("../models/ruins.js")


router.post('/', (req, res) => {
  Ruin.create(req.body, (error, createdRuin) => {
    Ruin.find({}, (error, foundRuins) => {
      res.json(foundRuins)
    })
  })
})

router.get('/', (req, res) => {
  Ruin.find({}, (error, foundRuins) => {
    res.json(foundRuins)
  }).sort({likes: 'desc'})
})

router.get('/:id', (req, res) => {
  Ruin.findById(req.params.id, (error, foundRuin) => {
    res.json(foundRuin)
  })
})

router.delete('/:id', (req, res) => {
  Ruin.findByIdAndDelete(req.params.id, (error, deletedRuin) => {
    Ruin.find({}, (error, foundRuins) => {
      res.json(foundRuins)
    })
  })
})

router.put('/likes/:id', (req, res) => {
  Ruin.findByIdAndUpdate(req.params.id, {$inc: {'likes': + 1}}, {new:true}, (error, updatedRuin) => {
    Ruin.find({}, (error, foundRuins) => {
      res.json(foundRuins)
    }).sort({likes: 'desc'})
  })
})

router.put('/rating/comments/:id', (req, res) => {
  // Ruin.findByIdAndUpdate(req.params.id, { $push: {rating: req.body.rating, comments: req.body.comments} }, {new:true}, (error, updatedRuin) => {
  //   Ruin.find({}, (error, foundRuins) => {
  //     res.json(foundRuins)
  Ruin.findByIdAndUpdate(req.params.id, {rating: req.body.rating, comments: req.body.comments}, {new:true}, (error, updatedRuin) => {
    Ruin.find({}, (error, foundRuins) => {
      res.json(foundRuins)
    })
  })
})




module.exports = router;
