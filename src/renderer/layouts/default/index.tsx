import React, { Suspense } from 'react'
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom'
import routes from '@routes'

const loading = () => <div>Loading...</div>

const DefaultLayout: React.FC<RouteComponentProps> = (props) => {
  const { location } = props

  return (
    <>
      <header>{location.pathname}</header>
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={String(idx)}
                path={route.path}
                exact={route.exact}
                render={(routeProps) => <route.component {...routeProps} />}
              />
            ) : null
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </>
  )
}

export default DefaultLayout
