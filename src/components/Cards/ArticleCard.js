import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { useState } from "react";
import ArticleLoader from '../Loaders/articleCard'
export default function ArticleCard({ article }) {
  const [isLoading, setIsLoading] = useState(true);

  const {title,description,images,dateCreation,id} = article

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
    <animated.div className="Article-card-container" style={isLoading?{display:'none'}:{...styles}}>
      <div className="Article-card">
        <Link to={id}>
          <div className="imgBx">
            <img src={images[0].fields.file.url} onLoad={() => hideLoader()}/>
          </div>
          <div className="contentBx">
            <div className="content">
              <h3>{title}</h3>
              <h3>{dateCreation.split("T",1)}</h3>
            </div>
          </div>
        </Link>
      </div>
      <p className="Article-card-shortDescription">
        {description}
      </p>
    </animated.div>
    {isLoading && <ArticleLoader />}
    </>
  );
}
