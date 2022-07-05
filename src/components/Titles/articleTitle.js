import React from "react";

export default function articleTitle({className="",label=""}) {
  return <h1 className={`article-title ${className}`}>{label}</h1>;
}
