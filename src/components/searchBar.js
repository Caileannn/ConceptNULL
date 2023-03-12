import React from "react";
import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Input({ containerClass, className,setRealValue }) {
  const [time , setTime] = React.useState(null);
  const [value, setValue] = React.useState("");

  const onChangeSearch = (query) => {
    setValue(query);
    if(time != null){
      clearTimeout(time)
    }
    setTime(setTimeout(() => {
      setRealValue(query)
    }, 400))
  };

  const onReset = () => {
    setValue("");
      setRealValue("")
  };
  return (
    <div className={`SearchBar-container ${containerClass}`}>
      <input
        type="text"
        className={`SearchBar-input ${className}`}
        placeholder="Search"
        value={value}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
      {value !== "" && (
        <FontAwesomeIcon
          icon={faTimes}
          color="#14390A"
          style={{ paddingRight: ".8rem", cursor: "pointer" }}
          onClick={() => onReset()}
        />
      )}
      <FontAwesomeIcon
        icon={faSearch}
        color="#4c863e"
        size="lg"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

