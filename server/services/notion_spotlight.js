const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

// Init client
const notion = new Client({
    auth: process.env.NOTION_APP_KEY,
})

// Update Database Key
const database_spotlight_Id = process.env.NOTION_CN_SPOTLIGHT_DB_KEY


// Fetch Update Information
module.exports = async function getSpotlight(){
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