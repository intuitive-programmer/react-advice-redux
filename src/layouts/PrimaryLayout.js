import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header className="nav-bar flex-center light-shadow">
      <h3 className="heading">React Advice</h3>
    </header>
    <main>
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect to='/home' />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout