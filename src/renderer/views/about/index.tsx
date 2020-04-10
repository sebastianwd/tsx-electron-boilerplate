import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const About: React.FC<RouteComponentProps> = (props) => {
  const { location } = props

  return <div>About {location.pathname}</div>
}

export default About
