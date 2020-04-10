import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

const Home: React.FC<RouteComponentProps> = (props) => {
  const { location } = props

  return (
    <div>
      Hello {location.pathname} <Link to="/about">About</Link>
    </div>
  )
}

export default Home
