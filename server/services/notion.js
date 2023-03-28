const dotenv = require('dotenv').config()
const express = require('express')
const { Client } = require('@notionhq/client')
const router = express.Router()

//Init client
const notion = new Client({
    auth: process.env.NOTION_APP_KEY,
})

// Introduction Database Key
const database_intro_Id = process.env.NOTION_CN_INTRO_DB_KEY
const database_update_Id = process.env.NOTION_CN_UPDATE_DB_KEY
const database_spotlight_Id = process.env.NOTION_CN_SPOTLIGHT_DB_KEY
const database_calls_Id = process.env.NOTION_CN_CALLS_DB_KEY

router.get('/intro', async(req, res) => {
    const introduction = await getIntro()
    console.log("<Introduction Fetched>")
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(introduction))
})

router.get('/updates', async(req, res) => {
    const update = await getUpdate()
    console.log("<Updated Fetched>")
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(update))
})

router.get('/spotlights', async(req, res) => {
    const spotlight = await getSpotlight()
    console.log("<Spotlight Fetched>")
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(spotlight))
})

router.get('/calls', async(req, res) => {
    const calls = await getCalls()
    console.log("<Calls Fetched>")
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(calls))
})

module.exports = router;

async function getCalls(){
    console.log("Fetching...")
    const {results} = await notion.databases.query({
        database_id: database_calls_Id,
    })
    
    const calls = results.map((page) => {       
        return{
            type: page.properties.type.multi_select[0].name,
            deadline: page.properties.deadline.date,
            url: page.properties.url.url,
            location: page.properties.location.rich_text[0].plain_text,        
            text: page.properties.text.rich_text[0].plain_text,
            keywords: page.properties.keywords.rich_text[0].plain_text,
            header: page.properties.title.title[0].plain_text
        }
    })

    return calls
}

async function getSpotlight(){
    console.log("Fetching...")
    const {results} = await notion.databases.query({
        database_id: database_spotlight_Id,
    })
    const spotlight = results.map((page) => {       
        return{
            id: page.properties.nid.number,
            text: page.properties.text.rich_text[0].plain_text,
            header: page.properties.name.title[0].plain_text,
            img_url: page.properties.img_url.url,
            url: page.properties.other_link.rich_text[0].plain_text,
            name: page.properties.name.title[0].plain_text
        }
    })

    return spotlight
    
}

async function getUpdate(){
    console.log("Fetching...")
    const {results} = await notion.databases.query({
        database_id: database_update_Id,
    })
    console.log(results)
    const updates = results.map((page) => {       
        return{
            id: page.properties.nid.number,
            text: page.properties.text.rich_text[0].plain_text,
            header: page.properties.name.title[0].plain_text,
            img_url: page.properties.img_url.url,
            url: page.properties.other_link.rich_text[0].plain_text,
            name: page.properties.name.title[0].plain_text
        }
    })

    return updates
    
}

// Fetch Introduction Information
async function getIntro(){
    console.log("Fetching...")
    const {results} = await notion.databases.query({
        database_id: database_intro_Id,
    })
    const info_intro = results.map((page) => {   
        
        return{
            id: page.properties.nid.number,
            text_body: page.properties.introduction_text.rich_text[0].plain_text,
            header: page.properties.name.title[0].plain_text,
            date: page.properties.date.date.start,
        }
    })

    return info_intro
    
}
