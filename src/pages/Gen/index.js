import React from "react";
import Container from "../../components/container";
import "./style.css";
import Papa from 'papaparse';
import { useCallback, useState } from "react";
import {useDropzone} from 'react-dropzone'

export default function Index() {


  const [obj, setObj] = useState([
    {}
  ])

  //Accepts file dropped in
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      //If successful, attempts parses file
      parseFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    //Call this method when file dropped
    onDrop,
    //accpted files types
    accept: 'text/csv',
  });


  //Parse file
  const parseFile = file => {
    Papa.parse(file,{
      download: true,
        delimiter: ",",
        header: true,
        complete: ((result) => {
          //obj = result.data
          setObj(result.data)
          console.log(obj)
        })
    }
      );
  };


  
  let currentDate = new Date();
  console.log(currentDate)

  const mapOCList = obj.map(elm => {

   let date = new Date(elm.deadline)

   if(elm.type == "opencall" && date >= currentDate){
    return(
    <div className="obj">
        <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
      </div>)
   }
  })

  const mapRList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "residency" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

   const mapFOList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "funding" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

   const mapPFList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "projectfunding" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

   const mapWSList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "workshop" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

   const mapJOList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "job" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

   const mapSVList = obj.map(elm => {
    let date = new Date(elm.deadline)

    if(elm.type == "studio" && date >= currentDate){
     return(
     <div className="obj">
         <h2>{elm.title}</h2>
        <div className="obj-row">
          <h3><b>Deadline: </b><i>{elm.deadline}</i></h3>
          <h4>{elm.location}</h4>
        </div>
        <p>{elm.short_desc}</p>
        <a href={elm.url} target="_blank"><h5>Link↗</h5></a>
        <div className="line-break"></div>
       </div>)
    }
   })

  
  

  


  return (
    <Container className="gen-cont">
        <div className="gen-body">
          <div
            {...getRootProps({
              className: `dropzone
              ${isDragAccept && 'dropzoneAccept'}
              ${isDragReject && 'dropzoneReject'}`,
            })}
                >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>🫳📄</p>
          )}
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


