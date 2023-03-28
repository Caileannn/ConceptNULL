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
const routeHandler = require('./services/notion')
const port = process.env.PORT

const app = express()
app.use('/', routeHandler)

/*
app.use((req, res, next) => {
     res.append('Access-Control-Allow-Origin', ['*']);
     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
     res.append('Access-Control-Allow-Headers', 'Content-Type');
     res.set('Content-Type', 'application/json')
     res.setHeader('Content-Type', 'application/json');
     next();
 });

// Newsletter Call
app.get('/api/newsletter-introduction', async(req, res) => {
     const introduction = await getIntro()
     console.log("<Introduction Fetched>")
     res.setHeader("Content-Type", "application/json")
     res.end(JSON.stringify(introduction))
})

app.get('/api/updates', async(req, res) => {
     const update = await getUpdate()
     res.setHeader('Content-Type', 'application/json');
     console.log("<Updated Fetched>")
     res.json(update)
     console.log(update)
})

app.get('/api/spotlights', async(req, res) => {
     res.setHeader('Content-Type', 'application/json');
     const spotlight = await getSpotlight()
     console.log("<Spotlight Fetched>")
     res.json(spotlight)
})

app.get('/api/calls', async(req, res) => {
     const calls = await getCalls()
     console.log("<Calls Fetched>")
     res.json(calls)
})

*/


//Start sterver
app.listen(port, console.log('Server started on port ' + port + "\n"))
