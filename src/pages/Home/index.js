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
          <h1>🛠️ UNDER CONSTRUCTION 🛠️</h1>
          <h2>We are building out our site atm </h2>
          <br/><br/><br/><br/><br/>
          <h1>Want to know more about <i>Fioruil</i> ?</h1>
          <h2>Check out our Socials and About/FAQ page</h2>
          <div class="heart"><h1>🖤</h1></div>
        </div>
      
    </Container>
  );
}
