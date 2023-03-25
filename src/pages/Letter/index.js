import React from "react";
import Container from "../../components/container";
import "./style.css";
import Papa from 'papaparse';
import { useCallback, useState, useEffect } from "react";
import {useDropzone} from 'react-dropzone'

export default function Index() {

  
  const [obj, setObj] = useState([
    {}
  ])

  
  var deadlineDate;
  let news = "./newsletter.csv"
  let currentDate = new Date();


  useEffect(()=>{
    Papa.parse(news,{
      download: true,
      delimiter: ",",
      header: true,
      complete: ((result) => {
        setObj(result.data);
      })
  });

  }, [])


  const mapOCList = obj.map(elm => {

    if(elm.type == "opencall"){
     deadlineDate = new Date(elm.deadline)
     if(deadlineDate >= currentDate){
       return(
       <div className="obj">
           <h2>{elm.title}</h2>
           <div className="obj-row">
             <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
             <h4>{elm.location}</h4>
             <h3>{elm.keyword}</h3>
           </div>
           <p>{elm.short_desc}</p>
           <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
           <div className="line-break"></div>
         </div>
         )}
  }
 })
 
   const mapRList = obj.map(elm => {
 
     if(elm.type == "residency"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapFOList = obj.map(elm => {
 
     if(elm.type == "funding"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapPFList = obj.map(elm => {
 
     if(elm.type == "projectfunding"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapWSList = obj.map(elm => {
     
     if(elm.type == "workshop"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapJOList = obj.map(elm => {
 
     if(elm.type == "job"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
 
    const mapSVList = obj.map(elm => {
 
     if(elm.type == "studio"){
       deadlineDate = new Date(elm.deadline)
       if(deadlineDate >= currentDate){
         return(
         <div className="obj">
             <h2>{elm.title}</h2>
             <div className="obj-row">
               <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
               <h4>{elm.location}</h4>
               <h3>{elm.keyword}</h3>
             </div>
             <p>{elm.short_desc}</p>
             <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
             <div className="line-break"></div>
           </div>
           )}
    }
   })
  
  
  

  


  return (
    <Container className="gen-cont">
        <div className="gen-body">
          <div className="letter-intro">
            <h1 className="letter-date">April Newsletter</h1>  
              <p>We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. WWe encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill.</p>
              <p>We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. WWe encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill.</p>
          </div>
          <div className="letter-weekly">
            <h1>Weekly Spotlight 🔦</h1>
            <div className="weekly-spot">
              <span>Example Title</span>
              <p>We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. WWe encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill. We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill.</p>
              <h5>Link↗</h5>
              <div className="weekly-image">
                <img src="/image.png"></img>
              </div>
              <div className="weekly-line-break"></div>
            </div>
            
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


