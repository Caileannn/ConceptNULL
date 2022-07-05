import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import App from '../../../app.json'
import {Instagram,Facebook,Twitter} from '../../Icons'
export default function MenuDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        color="black"
        className="navbar-iconBar"
        onClick={() => setOpen(!open)}
      />
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(!open)}
        PaperProps={{
          sx: {
            width: "33%",
            backgroundColor: "black",
            opacity: "0.95",
            "@media(max-width: 768px)": {
              width: "50%",
            },
          },
        }}
      >
        <div className="navbar-menuDrawer">
          <h1
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          >
            x
          </h1>
          {routes.map((route, index) => (
            <Link
              to={route.path}
              key={index}
              className="navbar-menuDrawer-link"
            >
              <h2>{route.label}</h2>
            </Link>
          ))}
          <div className="navbar-menuDrawer-social">
          <h3 >{App.SocialMedia.email} </h3>
          <Twitter
            size="lg"
            className="navbar-iconBar"
            color="white"
            link={App.SocialMedia.twitter}

          />
          <Instagram
            size="lg"
            color="white"
            link={App.SocialMedia.instagram}

            className="navbar-iconBar"
          />
          </div>
        </div>
      </Drawer>
    </>
  );
}

const routes = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "F.A.Q", path: "/faq" },
];

const route = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Marketplace", path: "/market" },
  { label: "About", path: "/about" },
  { label: "F.A.Q", path: "/faq" },
];
