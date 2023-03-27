const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

// Init client
const notion = new Client({
    auth: process.env.NOTION_APP_KEY,
})

// Update Database Key
const database_calls_Id = process.env.NOTION_CN_CALLS_DB_KEY


// Fetch Update Information
module.exports = async function getCalls(){
    console.log("Fetching...")
    const {results} = await notion.databases.query({
        database_id: database_calls_Id,
    })
    /*
    console.log(results[0].properties.type.multi_select[0].name)
    console.log(results[0].properties.deadline.date.start)
    console.log(results[0].properties.url.url)
    console.log(results[0].properties.location.rich_text[0].plain_text)
    console.log(results[0].properties.text.rich_text[0].plain_text)
    console.log(results[0].properties.keywords.rich_text[0].plain_text)
    console.log(results[0].properties.title.title[0].plain_text)
    */
    const calls = results.map((page) => {       
        return{
            type: page.properties.type.multi_select[0].name,
            deadline: page.properties.deadline.date.start,
            url: page.properties.url.url,
            location: page.properties.location.rich_text[0].plain_text,        
            text: page.properties.text.rich_text[0].plain_text,
            keywords: page.properties.keywords.rich_text[0].plain_text,
            header: page.properties.title.title[0].plain_text
        }
    })

    return calls
    
}