import React from "react";

export default function Artist(props) {
  const { key, hasNodes, toggleNode, label,isOpen,first } = props;

  var styles= first ?  {margin:0} : null 
  styles=isOpen ? {...styles,paddingLeft:'.5rem'} :styles 
  return (
    <div
    className="market-artist"
      key={key}
      {...props}
      style={styles}
      onClick={(e) => {
        if (hasNodes && toggleNode) {
          toggleNode();
        }

        e.stopPropagation();
      }}
    >
     <h3>{label}</h3>
    </div>
  );
}
