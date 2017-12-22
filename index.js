const express = require("express")
const app     = express()
const pug     = require('pug')

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/assets'))
app.set('view engine', 'pug')

app.get('/',function(req,res) {
    res.render('index.pug')
    //It will find and locate index.html from View or Scripts
});

app.listen(8080, 'localhost')