import React from "react";
import "./homeLink.css";
import { Link } from "react-router-dom";
export default function HomeLink({ to, label,style }) {
  return (
    <Link to={to} style={style}>
      <h1 className="link hvr-grow">{label}</h1>
    </Link>
  );
}
