import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const DefaultLayout = React.lazy(() => import('./layouts/default'))

const loading = () => <div>Loading...</div>

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={(props) => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
