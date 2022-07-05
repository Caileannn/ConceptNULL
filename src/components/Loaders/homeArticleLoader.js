import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={300}
    viewBox="0 0 900 400"
    backgroundColor="#fffcf4"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="35" y="0" rx="0" ry="0" width="900" height="370" />
  </ContentLoader>
)

export default MyLoader

