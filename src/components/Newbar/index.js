import React from "react";
import "./style.css";


import { Link } from "react-router-dom";
import App from '../../app.json'


export default function Index() {
  return (
    <div className="nb-band">
        <div className="btn-band">
            <div className="btn-group">
                <Link to="/news"><div className="btn-nav">News<span className="span-uni-arrow">&#129130;</span></div></Link>
                <Link to="/about"><div className="btn-nav">About<span className="span-uni-arrow">&#x1F86D;</span></div></Link>
                <Link to="/" style={{textDecoration:'none' }}><div className="btn-symbol">ø</div></Link>
                <Link to="/faq"><div className="btn-nav">F.A.Q<span className="span-uni-arrow">&#x1F86D;</span></div></Link> 
                <Link to="/"><div className="btn-nav">#<span className="span-uni-arrow">&#x1F86D;</span></div></Link>
            </div>
        </div>
    </div>
  );
}
