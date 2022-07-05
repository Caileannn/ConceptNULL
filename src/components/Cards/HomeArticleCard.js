import React from "react";
import "./HomeArticleCard.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { useState } from "react";
import HomeArticleLoader from '../Loaders/homeArticleLoader'
export default function HomeArticleCard({article}) {
  const {title, description, imagesUrl,id} = article;
  const [isLoading, setIsLoading] = useState(true);

  const hideLoader = () => {
      setIsLoading(false);
  };

  const styles = useSpring({
    to: [
      { opacity: 1, },
    ],
    from: { opacity: 0 },
  })


  return (
    <>
    <animated.div className="card" style={isLoading?{display:'none'}:{...styles}}>
      <div className="imgBx">
        <img src={imagesUrl} onLoad={() => hideLoader()} />
      </div>
      <div className="contentBx">
        <div className="content">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <Link to={`/news/${id}`} style={{textDecoration:'none'}}><h4>Read</h4></Link>
        </div>
      </div>
    </animated.div>
    {isLoading && <HomeArticleLoader />}
    </>
  );
}
