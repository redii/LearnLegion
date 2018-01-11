// BASE SETUP
// ==========================================================

// Load all packages we need...
const express = require("express")
const app     = express()

// Setting up some static directorys
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/assets'))

// ROUTE SETUP
// ==========================================================

// default call on domain
app.get('/',function(req,res) {
    res.render('index.html')
});

// more routes can be put here...
app.get('/deploy/:gitUser.:gitRepo', function(req, res) {
    res.send("User: " + req.params.gitUser + "Repo: " + req.params.gitRepo);
});

// START THE SERVER
// ==========================================================
app.listen(80, 'localhost')