import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";
import ItemLoader from "../Loaders/itemCard";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function ItemCard({ key, item }) {
  const [isLoading, setIsLoading] = useState(true);
  const { title, price, imageUrl, idArtist, collectionName, id } = item;
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
        className="ItemCard-container"
        key={key}
        style={isLoading ? { display: "none" } : { ...styles }}
      >
        <img
          className="ItemCard-image"
          src={imageUrl}
          onLoad={() => hideLoader()}
          alt="description of image"
        />
        <h2>{title}</h2>
        <div className="ItemCard-content">
          <Link to={id} className="ItemCard-link">
            <h3 className="ItemCard-button">Buy</h3>
          </Link>
          <h3 className="ItemCard-price">{price}stx</h3>
        </div>
      </animated.div>
      {isLoading && <ItemLoader />}
    </>
  );
}
