// BASE SETUP
// ==========================================================

// Load all packages we need...
const express = require("express")
const app     = express()

// Define viewing engine EJS
app.set('view engine', 'ejs')

// Setting up some static directorys
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/assets'))

// ROUTE SETUP
// ==========================================================

// default call on domain
app.get('/',function(req,res) {
    res.render('index.ejs')
});

// more routes can be put here...

// START THE SERVER
// ==========================================================
app.listen(80, 'localhost')