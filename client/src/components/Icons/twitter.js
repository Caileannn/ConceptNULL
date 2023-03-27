import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function twitter({ className, link,color,size="2x" }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      {" "}
      <FontAwesomeIcon
        icon={faTwitter}
        size={size}
        color={color?color:"#62bbf4"}
        className={className}
      />
    </a>
  );
}

twitter.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
};
