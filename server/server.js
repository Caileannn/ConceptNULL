const express = require('express')
const bodyParser = require('body-parser')
const routeHandler = require('./services/notion.js')
const cors = require('cors')
const port = process.env.PORT 



const app = express()

var corsOptions = function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 
    'Content-Type, Authorization, Content-Length, X-Requested-With');
     next();
}


app.use(corsOptions)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/api', routeHandler)




//Start sterver
app.listen(port, console.log('Server started on port ' + port + "\n"))
