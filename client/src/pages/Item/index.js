import React from "react";
import "./style.css";
import { BigTitle } from "../../components/Titles";
import Container from "../../components/container";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {getItem} from '../../api/Items'
import { useSpring, animated } from 'react-spring'
import Itempage from '../../components/Loaders/itemPage'
import { useNavigate } from "react-router-dom";
export default function Index() {
  let {itemId} = useParams();
  let [item, setItem] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await getItem(itemId);
        setItem(result);
      } catch(e){
        navigate('/');
      }
    };
    fetchData();
  }, []);
  
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
    <Container className="itemMarket-container" >
      <BigTitle label={item?item.title:" "} className="itemMarket-title" style={isLoading?{display:'none'}:{}}/>

      <animated.img
        className="itemMarket-image"
        src={item&&item.imageUrl}
        onLoad={() => hideLoader()}
        style={{...styles}}
      />
      <animated.div className="itemMarket-data" style={{...styles}}>
        <h2>
          artist : <span className="itemMarket-item">{item&&item.idArtist.fields.name}</span>
        </h2>
        <h2>
          size : <span className="itemMarket-item">x7828ndjaydjdjk88810</span>
        </h2>
        <h2>
          collection :{" "}
          <span className="itemMarket-item">{item&&item.collectionName}</span>
        </h2>
        <h2>
          date : <span className="itemMarket-item">{item&&item.dateCreation.split("T",1)}</span>
        </h2>
        <button className="itemMarket-button">Buy</button>
      </animated.div>
      <animated.div className="itemMarket-details" style={{...styles}}>
        <h1 className="itemMarket-details-title">item details</h1>
        <h2>
          owner :{"\n"}
          <span className="itemMarket-item">x7828ndjaydjdjk88810</span>
        </h2>
        <h2>
          Trade History :{"\n"}
          <span className="itemMarket-item">
            x7828ndjaydjdjk88810 - x7828ndjaydjdjk88810
          </span>
        </h2>
        <h2>
          Price :{"\n"}
          <span className="itemMarket-item">{item&&item.price} stx</span>
        </h2>
      </animated.div>
    </Container>
    {isLoading && <Itempage />}
    </>
  );
}
