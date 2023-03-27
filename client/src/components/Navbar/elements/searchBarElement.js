import React from "react";
import { useState } from "react";

export default function SearchBarElement({functionToCall}) {
  const [time, setTime] = React.useState(null);
  const [value, setValue] = React.useState("");
  const onChangeSearch = (query) => {
    setValue(query);
    if (time != null) {
      clearTimeout(time);
    }
    setTime(
      setTimeout(() => {
        functionToCall(query);
      }, 400)
    );
  };

  

  return (
    <input
      type="text"
      placeholder="Enter Keywords"
      className="navbar-searchBarElement"
      value={value}
      onChange={(e) => onChangeSearch(e.target.value)}
    />
  );
}
