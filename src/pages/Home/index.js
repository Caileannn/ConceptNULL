import React from "react";
import "./style.css";
import { HomeLink } from "../../components/Links";
import { HomeItemCard } from "../../components/Cards";
import { HomeArticleCard } from "../../components/Cards";
import { useEffect, useState } from "react";
import Container from "../../components/container";
import { getRandomArticles } from "../../api/Article";
import { getRandomItems } from "../../api/Items";


export default function Index() {
  const [articles, setArticles] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRandomArticles(2);
      const result2 = await getRandomItems(1);
      setArticles(result);
      setItem(result2);
    };
    fetchData();
  }, []);
  return (
    <Container className="home-cont">
      
      <div className="home-title">
          <div className="home-textHeader">
          <h1>CONCEPT NULL</h1>
          <h2>Newsletter Update</h2>
        </div>
      </div>
      <div className="home-summary-cont">
      <div className="home-summary-text">
        <p>Morbi quis metus nec ex porta pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula porta tellus, semper placerat magna tristique a. Nulla tristique sapien felis, vel imperdiet neque interdum vel. Vestibulum non sapien quis dolor fringilla fringilla at ut massa. Pellentesque eu nunc sed tortor cursus porttitor ac sit amet dolor. Sed nisl nisl, sollicitudin non risus a, iaculis tempus erat. Vestibulum pulvinar convallis enim, ut efficitur libero. Sed mollis luctus tortor ut efficitur. Aliquam posuere leo nulla, non consequat augue dapibus quis. Phasellus porttitor sodales orci sed sodales. Integer eget nibh a nulla iaculis cursus et eget erat. Nulla id fringilla mauris.</p>
      </div>
      <div className="home-button">
          <button>Sign-up <span className="span-uni-arrow">↗</span></button>
      </div>
      </div>
      
      
      
    </Container>
  );
}
