import React from 'react'

const Home = React.lazy(() => import('./views/home'))
const About = React.lazy(() => import('./views/about'))

const routes = [
  { path: '/', exact: true },
  { path: '/home', component: Home },
  { path: '/about', component: About },
]

export default routes
