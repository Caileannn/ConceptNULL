import React from "react";
import "./style.css";
//import Data from "./Components/Data";
//import Content from "./Components/Content";
//import Container from "../../components/container";
//import { useEffect, useState } from "react";
//import { getArticle } from "../../api/Article";
import { useParams, useNavigate } from "react-router-dom";

export default function Index() {
  {/** let { articleId } = useParams();
  let navigate = useNavigate();

  const [article, setArticle] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const article = await getArticle(articleId);
      setArticle(article);
      } catch(e) {
        navigate("/");
      }
    };
    fetchData();
  }, []);*/}
  
  return (
    {/**<Container className="article-cont ">
      {article != null && (
        <>
          <Data article={article} />
          <Content article={article}/>
        </>
      )}
    </Container> */}
    
  );
}
