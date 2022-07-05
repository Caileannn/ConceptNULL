import React from "react";

export default function ArtistNode(props) {
  const { label, onClick,parent,active } = props;
  
  return (
    <div
      key={label}
      {...props}
      className="market-artistCollection"
      onClick={(e) => {
        onClick(label,parent)
      }}
      style={active != null &&active.id === parent && active.collection === label ? {color:'green'} : {}}
    >
      <svg width='20' height="30" style={{padding:0,paddingRight:'1rem'}} >
            <g fill="none" strokeWidth="3" strokeDashoffset="0" strokeLinejoin="miter">
                <path strokeLinecap="butt" stroke="#4c853e" d="M5 16 l1000 0" />
            </g>
        </svg>
      <h4>{label}</h4>
    </div>
  );
}
