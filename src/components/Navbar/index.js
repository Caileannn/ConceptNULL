import React from "react";
import "./style.css";
import Stroke from "./elements/stroke";

import MenuDrawer from "./elements/menuDrawer";
import SearchBar from "./elements/searchBar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import {Facebook,Instagram, Twitter} from '../Icons'
import App from '../../app.json'
import flogo from "./flogo.png";

export default function Index() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="navbar-links">
          <Twitter
            className="navbar-iconBar"
            link={App.SocialMedia.twitter}
            color="black"
          />
          <Instagram
            className="navbar-iconBar"
            link={App.SocialMedia.instagram}
            color="black"
          />
        </div>
        <div className="flogo">
          <Link to="/" style={{textDecoration:'none' }}>
              <img src={flogo}></img>
          </Link>
        </div>
        <div className="navbar-searchBarContainer">
          <MenuDrawer />
        </div>
      </div>
      <div className="navbar-close">
      </div>
    </div>
  );
}
