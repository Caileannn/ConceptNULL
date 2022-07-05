import React from 'react'
import PropTypes from "prop-types";
import './bigTitle.css'
export default function bigTitle({label,style,className=""}) {
    return (
        <h1 style={style} className={`bigTitle ${className}`}>{label}</h1>
    )
}

bigTitle.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object
  };