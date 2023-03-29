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
    fetch("/api/intro", {
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
    fetch("/api/updates", {
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
    fetch("/api/spotlights").then(
      response => response.json()
    ).then(
      spotlight_res => {
        setSpotlight(spotlight_res)
      }
    )
  }, [])

  useEffect(() =>{
    fetch("https://conceptnull.onrender.com/api/calls", {
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
  let news = "./newsletter.csv"
  let testText = []
  let currentDate = new Date()
 
  const mapIntroduction = introduction_text.map(elm => {

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
  
  
  


  const mapOCList = call_text.map(elm => {

    if(elm.type == "opencall"){
     deadlineDate = new Date(elm.deadline)
     if(deadlineDate >= currentDate){
       return(
       <div className="obj">
           <h2>{elm.header}</h2>
           <div className="obj-row">
             <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
             <h4>{elm.location}</h4>
             <h3>{elm.keyword}</h3>
           </div>
           <p>{elm.text}</p>
           <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
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
             <h2>{elm.header}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.text}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
  
  
  

  


  return (
    <Container className="gen-cont">
        <div className="gen-body">
          {mapIntroduction}
          <div className="letter-weekly">
          {update_text.length > 0 && 
            <h1>Updates</h1>
            }
          {mapUpdates}
          <h1>Weekly Spotlight 🔦</h1>
          {mapSpotlights}
          </div>
       <div className="addelm">
          <h1>Open Calls📯</h1>
            {mapOCList}
          <h1>Residencies🏠</h1>
            {mapRList}
          <h1>Funding💸</h1>
            {mapFOList}
          <h1>Project Funding🧑‍🤝‍🧑</h1>
            {mapPFList}
          <h1>Workshops⚒️</h1>
            {mapWSList}
          <h1>Job Oppurtunities👜</h1>
            {mapJOList}
          <h1>Studio Vacancies🔓</h1>
            {mapSVList}
       </div>
      </div>
    </Container>

  );
}


