const express = require('express')
const bodyParser = require('body-parser')
const routeHandler = require('./services/notion.js')
const cors = require('cors')
const port = process.env.PORT



const app = express()

var corsOptions = function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', '*'); 
    next();
}




app.use(corsOptions)



app.use('/api', routeHandler)


app.use(express.static('../client/public'))


//Start sterver
app.listen(port, console.log('Server started on port ' + port + "\n"))
