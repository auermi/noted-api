// Packages
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var NoteSchema = new Schema({
  dateCreated: String,
  dateUpdated: String,
  note: String
})

module.exports = mongoose.model('Note', NoteSchema)
