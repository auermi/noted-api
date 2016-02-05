// Packages
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

// package.json
var pjson = require('./package.json')

// // Models
// var Note = require('./app/models/note')
//
// // Routes
// var noteRoute = require('./routes/note')

var app = express();
var port = process.env.PORT || 8080

// Establish MongoDB Connection
mongoose.connect('mongodb://localhost:27017/noted')

// Configure Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var router = express.Router()

// All routes will be prefixed with /api
app.use('/api', router)

// Default Route
router.get('/', function(req, res) {
  res.send('Welcome to the Noted API!')
})

app.listen(port, function() {
  console.log(pjson.name + ' listening on port ' + port)
})
