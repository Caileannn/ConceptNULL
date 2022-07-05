import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#fffcf4"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="23" y="32" rx="0" ry="0" width="369" height="268" /> 
    <rect x="114" y="323" rx="0" ry="0" width="174" height="23" /> 
    <rect x="77" y="362" rx="0" ry="0" width="255" height="18" /> 
    <rect x="76" y="376" rx="0" ry="0" width="255" height="28" />
  </ContentLoader>
)

export default MyLoader