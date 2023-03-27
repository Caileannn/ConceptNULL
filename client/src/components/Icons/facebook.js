import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function facebook({ className, link,color,size="2x" }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      {" "}
      <FontAwesomeIcon
        icon={faFacebook}
        size={size}
        color={color?color:"#385898"}
        className={className}
      />
    </a>
  );
}

facebook.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
};
