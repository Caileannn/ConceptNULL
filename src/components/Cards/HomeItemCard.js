import React from "react";
import "./HomeItemCard.css";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeItemLoader from "../Loaders/homeItemLoader";
export default function HomeItemCard({ item }) {
  const { title, imageUrl, description,id } = item;
  const [isLoading, setIsLoading] = useState(true);

  const hideLoader = () => {
    setIsLoading(false);
  };

  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  return (
    <>
      <animated.div
        className="item-card"
        style={isLoading ? { display: "none" } : { ...styles }}
      >
        <img
          className="item-card-img"
          src={imageUrl}
          onLoad={() => hideLoader()}
        ></img>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={`/market/${id}`}><button className="item-card-button hvr-grow">mint</button></Link>
      </animated.div>
      {isLoading && <HomeItemLoader />}
    </>
  );
}
