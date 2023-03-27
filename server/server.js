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
     res.setHeader('Content-Type', 'application/json');
     const introduction = await getIntro()
     console.log("<Introduction Fetched>")
     return res.json(introduction)
})

app.get('/updates', async(req, res) => {
     res.setHeader('Content-Type', 'application/json');
     const update = await getUpdate()
     console.log("<Updated Fetched>")
     return res.json(update)
})

app.get('/spotlights', async(req, res) => {
     res.setHeader('Content-Type', 'application/json');
     const spotlight = await getSpotlight()
     console.log("<Spotlight Fetched>")
     return res.json(spotlight)
})

app.get('/calls', async(req, res) => {
     res.setHeader('Content-Type', 'application/json');
     const calls = await getCalls()
     console.log("<Calls Fetched>")
     return res.json(calls)
})




//Start sterver
app.listen(PORT, console.log('Server started on port ' + PORT + "\n"))
