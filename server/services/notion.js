const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

//Init client
const notion = new Client({
    auth: process.env.NOTION_APP_KEY,
})

// Introduction Database Key
const database_intro_Id = process.env.NOTION_CN_INTRO_DB_KEY


// Fetch Introduction Information
module.exports = async function getIntro(){
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
