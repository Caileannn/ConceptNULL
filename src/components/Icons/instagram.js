import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function instagram({ className, link,color,size="2x" }) {
  return (
    <a href={link} target="_blank">
      {" "}
      <FontAwesomeIcon
        icon={faInstagram}
        size={size}
        color={color?color:"#ca2f80"}
        className={className}
      />
    </a>
  );
}

instagram.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
};
