import React from "react";
import { Drawer, Paper, IconButton, InputBase } from "@mui/material";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchBarElement from "./searchBarElement";
import { getAllByName } from "../../../api/general";
export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async (string) => {
    const result = await getAllByName(string);
    setResults(result);
    
  };

  const handleChange = (string) => {
    if (string == "") {
      setResults([]);
      setSearch(null);
      return;
    }
    setSearch(string);
    fetchData(string);
  };

  const handleOpen = () => {
    setOpen(!open);
    setResults([]);
    setSearch("")
  };

  const type = (type, children,to) => {
    return type == "articles" ? (
      <Link to={`/news/${to}`} className="navbar-fullscreenModal-results" onClick={()=>handleOpen()}>
        {children}
      </Link>
    ) : (
      <Link to={`/market/${to}`} className="navbar-fullscreenModal-results" onClick={()=>handleOpen()}>
        {children}
      </Link>
    );
  };
  return (
    <>
      <FontAwesomeIcon
        icon={faSearch}
        size={"2x"}
        color={"#4c863e"}
        style={{ cursor: "pointer" }}
        onClick={() => handleOpen()}
      />
      <Drawer
        anchor="right"
        open={open}
        onClose={() => handleOpen()}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#4c863e",
            opacity: "0.95",
          },
        }}
      >
        <div className="navbar-fullscreenModal">
          <div className="navbar-fullscreenModal-header">
            <h1
              className="navbar-title"
              style={{ color: "white", textShadow: "none" }}
            >
              Concept NULL
            </h1>
            <h1
              onClick={() => handleOpen()}
              style={{ position: "absolute", right: "1em", cursor: "pointer" }}
            >
              x
            </h1>
          </div>
          <SearchBarElement functionToCall={handleChange} />
          <div className="navbar-fullscreenModal-searchResults">
            {results.map((result, index) =>
              type(result.sys.contentType.sys.id, <h2 key={index}>{result.fields.title}</h2>,result.sys.id)
            )}
            {search === null && results.length === 0 && <h2 style={{color:'white'}} >No results were found </h2>}
          </div>
        </div>
      </Drawer>
    </>
  );
}


