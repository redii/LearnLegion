const express = require("express")
const app     = express()

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/assets'))

app.get('/',function(req,res) {
    res.render('index.html')
    //It will find and locate index.html from View or Scripts
});

app.listen(8080, 'localhost')