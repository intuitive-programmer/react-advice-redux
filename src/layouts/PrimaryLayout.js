import React from 'react'

import { Switch, Route, Redirect, Link } from 'react-router-dom'

import Home from '../pages/Home'
import SimpleReact from '../versions/SimpleReact'
import ReactWithRedux from '../versions/ReactWithRedux'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header className="nav-bar flex-center light-shadow">
      <Link className="home-link" to='/home'>
        <div>HOME</div>
      </Link>
      <h3 className="heading">React Advice</h3>
    </header>
    <main>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/simple-react' component={SimpleReact} />
        <Route path='/react-with-redux' component={ReactWithRedux} />
        <Redirect to='/home' />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout