import React from "react";
import "./style.css";


import { Link } from "react-router-dom";
import App from '../../app.json'


export default function Index() {
  return (
    <div className="nb-band">
        <div className="btn-band">
            <div className="btn-group">
                {/*<Link to="/about"><div className="btn-nav">About<span className="span-uni-arrow"></span></div></Link> */}
                
                <Link to="/" style={{textDecoration:'none'}}><div className="btn-symbol">ø</div></Link>

                {/*<Link to="/newsletter"><div className="btn-nav">Newsletter<span className="span-uni-arrow"></span></div></Link>*/}
                
            </div>
        </div>
    </div>
  );
}
