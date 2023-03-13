import React from "react";
import "./style.css";


import { Link } from "react-router-dom";
import App from '../../app.json'


export default function Index() {
  return (
    <div className="nb-band">
        <div className="btn-band">
            <div className="btn-group">
                <Link to="/news"><button>News&#x1F86D;</button></Link>
                <Link to="/about"><button>About&#x1F86D;</button></Link>
                <Link to="/" style={{textDecoration:'none' }}><button className="btn-symbol">ø</button></Link>
                <Link to="/faq"><button>F.A.Q&#x1F86D;</button></Link> 
                <Link to="/"><button>#&#x1F86D;</button></Link>
            </div>
        </div>
    </div>
  );
}
