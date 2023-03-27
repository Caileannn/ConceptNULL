import React from 'react'
import ContentLoader from "react-content-loader"

export default function itemCard({state}) {
    return (
        <ContentLoader 
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#fffcf4"
        foregroundColor="#c2c2c2"
        
      >
        <rect x="56" y="59" rx="0" ry="0" width="313" height="194" /> 
        <rect x="76" y="269" rx="0" ry="0" width="274" height="14" /> 
        <rect x="76" y="296" rx="0" ry="0" width="274" height="14" />
      </ContentLoader>
    )
}
