import React from "react";
import Container from "../../components/container";
import "./style.css";
import { useState, useEffect } from "react";


export default function Index() {

const [introduction_text, setIntro] = useState([{}])
const [update_text, setUpdate] = useState([{}])
const [spotlight_text, setSpotlight] = useState([{}])
const [call_text, setCalls] = useState([{}])


  useEffect(() =>{
    fetch("api/intro", {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    })
    .then(response => response.json())
        .then(
      data => {
        console.log(data)
        setIntro(data)
      }
  )}, [] )
  
  
  useEffect(() =>{
    fetch("api/updates", {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      }).then(
      response => response.json()
    ).then(
      update_res => {
        setUpdate(update_res)
      }
    )
  }, [])

  useEffect(() =>{
    fetch("api/spotlights").then(
      response => response.json()
    ).then(
      spotlight_res => {
        setSpotlight(spotlight_res)
      }
    )
  }, [])

  useEffect(() =>{
    fetch("api/calls", {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      }).then(
      response => response.json()
    ).then(
      data => {
        setCalls(data)
      }
  )}, [] )
  
  var deadlineDate;
  let testText = []
  let currentDate = new Date()
 
  const mapIntroduction2 = introduction_text.map(elm => {

    testText = []
    testText = elm.text_body
    if(introduction_text.length > 0 && testText != null){
    return(
      <div className="letter-intro">
            <span className="top-date">
              {elm.date}
            </span>
            <h1 className="letter-date">{elm.header}</h1>  
              {
                testText.map(elm => {
                  return(
                    <p>{elm.plain_text}</p>
                  )
                })
              }
        </div>
   )
  }
})


const mapIntroduction = introduction_text.map(elm => {
   
  console.log(elm.text_body)
  if(introduction_text.length > 0 && testText != null){
  return(
    <div className="letter-intro">
          <span className="top-date">
            {elm.date}
          </span>
          <h1 className="letter-date">{elm.header}</h1>  
            {
              elm.text_body.map(elm_t => {
                console.log(elm_t.text.content)
                if(elm_t.text.link == null){
                  return(
                    <p>{elm_t.text.content}</p>
                  )
                }else{
                  return(
                    <a href={elm_t.text.link.url}><p>{elm_t.text.content}</p></a>
                  )
                }
                
              })
            }
      </div>
 )
}
})


  const mapUpdates = update_text.map(elm => {

    testText = []
    testText = elm.text
    if(update_text.length > 0 && testText != null){
    return(
      <div className="weekly-spot">
              <span>{elm.header}</span>
              {
                testText.map(elm => {
                  return(
                    <p>{elm.plain_text}</p>
                  )
                })
              }
              <a href={elm.url}><h5>Link↗</h5></a>
              <div className="weekly-image">
                <img src={elm.img_url}></img>
              </div>
              <div className="weekly-line-break"></div>
            </div>
    )
  }
})


  
  const mapSpotlights = spotlight_text.map(elm => {

     testText = []
      testText = elm.text
      if(spotlight_text.length > 0 && testText != null){
        
      return(
        <div className="weekly-spot">
                <span>{elm.header}</span>
                {
                  testText.map(elm => {
                    return(
                      <p>{elm.plain_text}</p>
                    )
                  })
                }
                <a href={elm.url}><h5>Link↗</h5></a>
                <div className="weekly-image">
                  <img src={elm.img_url}></img>
                </div>
                <div className="weekly-line-break"></div>
        </div>
      )
    }

    
  })

  const mapArticles = spotlight_text.map(elm => {

     testText = []
     testText = elm.text
     if(spotlight_text.length > 0 && testText != null && elm.type == "article"){
       
     return(
       <div className="weekly-spot">
               <span>{elm.header}</span>
               {
                 testText.map(elm => {
                   return(
                     <p>{elm.plain_text}</p>
                   )
                 })
               }
               <a href={elm.url}><h5>Link↗</h5></a>
               <div className="weekly-image">
                 <img src={elm.img_url}></img>
               </div>
               <div className="weekly-line-break"></div>
       </div>
     )
   }
 })

 const mapPerformances = spotlight_text.map(elm => {

  testText = []
  testText = elm.text
  if(spotlight_text.length > 0 && testText != null && elm.type == "performance"){
    
  return(
    <div className="weekly-spot">
            <span>{elm.header}</span>
            {
              testText.map(elm => {
                return(
                  <p>{elm.plain_text}</p>
                )
              })
            }
            <a href={elm.url}><h5>Link↗</h5></a>
            <div className="weekly-image">
              <img src={elm.img_url}></img>
            </div>
            <div className="weekly-line-break"></div>
    </div>
  )
}
})

 const mapExhibitions = spotlight_text.map(elm => {

  testText = []
  testText = elm.text
  if(spotlight_text.length > 0 && testText != null && elm.type == "exh"){
    
  return(
    <div className="weekly-spot">
            <span>{elm.header}</span>
            {
              testText.map(elm => {
                return(
                  <p>{elm.plain_text}</p>
                )
              })
            }
            <a href={elm.url}><h5>Link↗</h5></a>
            <div className="weekly-image">
              <img src={elm.img_url}></img>
            </div>
            <div className="weekly-line-break"></div>
    </div>
  )
}
})
  
  
  


  const mapOCList = call_text.map(elm => {

    if(elm.type == "opencall"){
     deadlineDate = new Date(elm.deadline)
     if(deadlineDate >= currentDate){
       return(
       <div className="obj">
           <h3>{elm.header}</h3>
           <div className="obj-row">
             <p><b>Deadline: </b><i>{elm.deadline}</i></p>
             <i><p>{elm.location}</p></i>
           </div>
           <p>{elm.text}</p>
           <a href={elm.url} target="_blank"><p>Link 🡥</p></a>
           <div className="line-break"></div>
         </div>
         )}
  }
 })
 
   const mapRList = call_text.map(elm => {
 
     if(elm.type == "residency"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapFOList = call_text.map(elm => {
 
     if(elm.type == "funding"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapPFList = call_text.map(elm => {
 
     if(elm.type == "projectfunding"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapWSList = call_text.map(elm => {
     
     if(elm.type == "workshop"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapJOList = call_text.map(elm => {
 
     if(elm.type == "job"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapSVList = call_text.map(elm => {
 
     if(elm.type == "studio"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h3>{elm.header}</h3>
             <div className="obj-row">
               <p><b>Deadline: </b><i>{elm.deadline}</i></p>
               <i><p>{elm.location}</p></i>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><p>Link↗</p></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
  
  
  

  


  return (
    <Container className="gen-cont">

        <div className="gen-body">
          <div className="img-logo">
            <img src="Logo.svg"></img>
          </div>
          
          {mapIntroduction}
          <div className="letter-weekly">
          {update_text.length > 0 && 
            <h1>Updates</h1>
            }
          {mapUpdates}
          <h2>The Spotlight 🔦</h2>
          <h1 className="spot-sub-headings">Exhibitions</h1>
          {mapExhibitions}
          <h1 className="spot-sub-headings">Performances</h1>
          {mapPerformances}
          <h1 className="spot-sub-headings">Articles</h1>
          {mapArticles}
          
          </div>
       <div className="addelm">
          <div className="addelm-row"><h2>Open Calls </h2><h2 className="emoji">📯</h2></div>
            {mapOCList}
          <div className="addelm-row"><h2>Residencies </h2><h2 className="emoji">🏠</h2></div>
            {mapRList}
          <div className="addelm-row"><h2>Funding </h2><h2 className="emoji">💸</h2></div>
            {mapFOList}
          <div className="addelm-row"><h2>Project Funding </h2><h2 className="emoji">🧑‍🤝‍🧑</h2></div>
            {mapPFList}
          <div className="addelm-row"><h2>Workshops </h2><h2 className="emoji">⚒️</h2></div>
            {mapWSList}
          <div className="addelm-row"><h2>Job Oppurtunities </h2><h2 className="emoji">👜</h2></div>
            {mapJOList}
          <div className="addelm-row"><h2>Studio Vacancies </h2><h2 className="emoji">🔓</h2></div>
            {mapSVList}
       </div>
      </div>
    </Container>

  );
}


