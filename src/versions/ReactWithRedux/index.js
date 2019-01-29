import React, { Component } from 'react'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'

class ReactWithRedux extends Component {
  render() {
    const { history } = this.props
    return(
      <div className="react-advice-layout">
        <header className="grid-container">
          <AdviceSlip />
        </header>
        <main>
          <TabLayout history={history} />
        </main>
      </div>
    )
  }
}

export default ReactWithRedux