import React from "react";
import { BigTitle } from "../../components/Titles";
import "./style.css";
import Container from "../../components/container";
import ArticleCard from "../../components/Cards/ArticleCard";
import Pagination from "../Market/Components/Pagination";
import { useEffect, useState } from "react";
import { getArticles } from "../../api/Article";
export default function Index() {
  const [articles, setArticles] = React.useState([]);
  const [articlesVariable,setArticlesVariable]= React.useState([]);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const articles = await getArticles();
      setArticles(articles);
      setArticlesVariable(articles.slice(0, 6));
    };
    fetchData();
  }, []);

  const onChangePage = async (type) => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
        if(type){
            setPage(page + 1);
            let a = page-1+1
            setArticlesVariable(articles.slice(a*6, (page+1) * 6));
        } else {
            setPage(page - 1);
            let a = page-1-1
            setArticlesVariable(articles.slice(a*6, (page-1) * 6));
        }
  };
  return (
    <Container className="news-cont">
      <BigTitle label="News" />
      <div className="news-items">
        {articlesVariable.map((article) => (
          <ArticleCard  article={article}/>
        ))}
      </div>
      {articlesVariable.length!= 0 && <Pagination items={articles} page={page} onChange={onChangePage} />}
    </Container>
  );
}
