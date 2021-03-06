// Packages
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

// package.json
var pjson = require('../package.json')

// Routes
var noteRoute = require('./routes/note')

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

router.use('/notes', noteRoute)

// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.listen(port, function() {
  console.log(pjson.name + ' listening on port ' + port)
})
