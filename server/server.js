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

// Newsletter Call
app.get('/newsletter-introduction', async(req, res) => {
     const introduction = await getIntro()
     console.log("<Introduction Fetched>")
     res.setHeader('Content-Type', 'application/json');
     res.json(introduction)
})

app.get('/updates', async(req, res) => {
     const update = await getUpdate()
     console.log("<Updated Fetched>")
     res.setHeader('Content-Type', 'application/json');
     res.json(update)
})

app.get('/spotlights', async(req, res) => {
     const spotlight = await getSpotlight()
     console.log("<Spotlight Fetched>")
     res.setHeader('Content-Type', 'application/json');
     res.json(spotlight)
})

app.get('/calls', async(req, res) => {
     const calls = await getCalls()
     console.log("<Calls Fetched>")
     res.setHeader('Content-Type', 'application/json');
     res.json(calls)
})




//Start sterver
app.listen(PORT, console.log('Server started on port ' + PORT + "\n"))
