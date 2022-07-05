import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={600}
    viewBox="0 0 1000 600"
    backgroundColor="#fffcf4"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="16" y="42" rx="2" ry="2" width="140" height="16" /> 
    <rect x="2" y="71" rx="2" ry="2" width="356" height="372" /> 
    <rect x="20" y="492" rx="2" ry="2" width="140" height="12" /> 
    <rect x="20" y="518" rx="2" ry="2" width="140" height="12" /> 
    <rect x="414" y="136" rx="2" ry="2" width="140" height="12" /> 
    <rect x="415" y="164" rx="2" ry="2" width="140" height="12" /> 
    <rect x="414" y="194" rx="2" ry="2" width="140" height="12" />
  </ContentLoader>
)

export default MyLoader