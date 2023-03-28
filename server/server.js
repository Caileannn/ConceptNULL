const express = require('express')
const bodyParser = require('body-parser')
const routeHandler = require('./services/notion.js')
const port = process.env.PORT

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/', routeHandler)


//Start sterver
app.listen(port, console.log('Server started on port ' + port + "\n"))
