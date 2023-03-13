import React from "react";
import "./style.css";


import { Link } from "react-router-dom";
import App from '../../app.json'


export default function Index() {
  return (
    <div className="nb-band">
        <div className="btn-band">
            <div className="btn-group">
                <Link to="/news"><div className="btn-nav">News&#x1F86D;</div></Link>
                <Link to="/about"><div className="btn-nav">About&#x1F86D;</div></Link>
                <Link to="/" style={{textDecoration:'none' }}><div className="btn-symbol">ø</div></Link>
                <Link to="/faq"><div className="btn-nav">F.A.Q&#x1F86D;</div></Link> 
                <Link to="/"><div className="btn-nav">#&#x1F86D;</div></Link>
            </div>
        </div>
    </div>
  );
}
