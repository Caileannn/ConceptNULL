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
        <p>Welcome to the <b>Concept NULL</b> newsletter!</p>
        <p> We’re excited to welcome you to this little community we are building.</p>
        <p>
The aim of the newsletter is to create a repository of all artists in Ireland who might identify part or all their practice as <span className="hl-text">New Media art</span>, and to ‘join the dots’ between all the individuals and groups in Ireland who have been working, making and establishing this area over the last few decades in Ireland.
But this should not be limited to artists. Any <span className="hl-text">technicians</span>, <span className="hl-text">researchers</span>, <span className="hl-text">creative coders</span>, or enthusiasts interested in the interdisciplinary nature of art and technology are sought for and welcomed.
</p>
<p>We’ll be putting in any <span className="hl-text-2">funding opportunities</span>, <span className="hl-text-2">open calls</span>, <span className="hl-text-2">residencies</span>, <span className="hl-text-2">workshops</span>, <span className="hl-text-2">events</span> and <span className="hl-text-2">online resources</span> that are applicable to new media artists and creative technologists. It will be sent out on the <b>1st of every month</b>. That’s it for now. 
</p>
<p>We encourage anyone to spread the word of the newsletter to anyone who may be interested in reading about this stuff and to share with us any opportunities that you think would fit the bill.
</p>
<p><u>You can sign-up below by filling out a short Google Form!</u></p>
      </div>
      <div className="home-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyw93dKoFG2JA0tu0YmVkYSFovwKCCGRKehMJiHFLGhDUMvA/viewform" target="_blank"><button>Sign-up <span className="span-uni-arrow">↗</span></button></a>
      </div>
      </div>
      
      
      
    </Container>
  );
}
