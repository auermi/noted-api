// Packages
var express = require('express')

// Models
var Note = require('../models/note')

var router = express.Router();

router.route('/')
  .post(function(req, res) {
    var note = new Note()
    // When you create a note these values will be the same
    note.dateCreated = note.dateUpdated = req.body.dateCreated
    note.note = req.body.note

    note.save(function(err) {
      if (err)
        res.send(err)

      res.json( { message: 'Note created!'} )
    })
  })

module.exports = router
