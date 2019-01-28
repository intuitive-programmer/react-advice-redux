import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Tab from '../components/ui/Tab'
import SavedAdvice from '../pages/SavedAdvice'

class TabLayout extends Component {
  state = {
    activeTabIndex: 0
  }

  activateTab = event => {
    const { history } = this.props
    switch (event.target.id) {
      case "saved":
      this.setState({ activeTabIndex: 0 })
      history.push('/simple-react/saved-advice')
      break
      case "user":
      this.setState({ activeTabIndex: 1 })
      history.push('/simple-react/user-profile')
      break
      default:
      this.setState({ activeTabIndex: 0 })
    }
  }

  render() {
    const { activeTabIndex } = this.state
    const { savedAdvice } = this.props
    return(
      <div className="tab-layout">
        <header className="flex-center light-shadow">
          <Tab
            id="saved"
            onClick={this.activateTab}
            active={activeTabIndex === 0}
            label="Saved"
          />
          <Tab
            id="user"
            onClick={this.activateTab}
            active={activeTabIndex === 1}
            label="User"
          />
        </header>
        <main>
          <Switch>
            <Route
              path='/simple-react/saved-advice'
              render={routerProps =>
                <SavedAdvice
                  {...routerProps}
                  savedAdvice={savedAdvice}
                />
              }
            />
            <Route path='/simple-react/user-profile' />
            <Redirect to='/simple-react/saved-advice' />
          </Switch>
        </main>
      </div>
    )
  }
}

export default TabLayout