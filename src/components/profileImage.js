import React from "react";
import "./profileImage.css";
export default function profileImage({url}) {
  return (
    <div className="article-profileImage-container">
        <img
          className="article-profileImage"
          src={url}
        />
      <div className="contentBx">
      </div>
    </div>
  );
}
