var express = require('express')
var app = express()
var morgan = require('morgan')

app.use(express.static('./public'))
express.urlencoded()

app.get('/', (req, res) => {
    res.send('Hello Wolrd!')
})