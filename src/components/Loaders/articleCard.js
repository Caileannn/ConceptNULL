import React from 'react'

import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#fffcf4"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="1" y="11" rx="27" ry="27" width="400" height="304" /> 
    <rect x="5" y="336" rx="2" ry="2" width="400" height="21" />
  </ContentLoader>
)

export default MyLoader