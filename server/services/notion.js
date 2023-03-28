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

router.get('/newsletter', async(req, res) => {
    const introduction = await getIntro()
    console.log("<Introduction Fetched>")
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(introduction))
})

module.exports = router;


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
