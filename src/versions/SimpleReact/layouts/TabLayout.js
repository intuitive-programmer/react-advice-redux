import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Tab from '../components/Tab'

const TabLayout = () => (
  <div className="tab-layout">
    <header className="flex-center light-shadow">
      <Tab>SAVED</Tab>
      <Tab>USER</Tab>
    </header>
    <main>
      <Switch>
        <Route path='/simple-react/saved-advice' />
        <Route path='/simple-react/user-profile' />
        <Redirect to='/simple-react/saved-advice' />
      </Switch>
    </main>
  </div>
)

export default TabLayout