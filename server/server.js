// Import all api calls

// Introduction
const getIntro = require('./services/notion')
// Updates
const getUpdate = require('./services/notion_update')
// Spotlight
const getSpotlight = require('./services/notion_spotlight')
// Open Calls
const getCalls = require('./services/notion_calls')

const express = require('express')
const PORT = process.env.PORT || 5000


const app = express()

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", '*');
     res.header("Access-Control-Allow-Credentials", true);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     next();
   });

// Newsletter Call
app.get('/newsletter-introduction', async(req, res) => {
     res.header("Access-Control-Allow-Origin", '*');
     res.header("Access-Control-Allow-Credentials", true);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     const introduction = await getIntro()
     console.log("<Introduction Fetched>")
     return res.json(introduction)
})

app.get('/updates', async(req, res) => {
     res.header("Access-Control-Allow-Origin", '*');
     res.header("Access-Control-Allow-Credentials", true);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     const update = await getUpdate()
     console.log("<Updated Fetched>")
     return res.json(update)
})

app.get('/spotlights', async(req, res) => {
     res.header("Access-Control-Allow-Origin", '*');
     res.header("Access-Control-Allow-Credentials", true);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     const spotlight = await getSpotlight()
     console.log("<Spotlight Fetched>")
     return res.json(spotlight)
})

app.get('/calls', async(req, res) => {
     res.header("Access-Control-Allow-Origin", '*');
     res.header("Access-Control-Allow-Credentials", true);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     const calls = await getCalls()
     console.log(calls)  
     console.log("<Calls Fetched>")
     return res.json(calls)
})




//Start sterver
app.listen(PORT, console.log('Server started on port ' + PORT + "\n"))
