import React, { Component } from 'react'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import AdviceSlipAPI from '../../apis/AdviceSlip'

class SimpleReact extends Component {
  state = {
    currentAdviceSlip: null
  }

  componentDidMount() {
    AdviceSlipAPI.getRandomAdviceSlip()
      .then(data => this.setState({ currentAdviceSlip: data.slip }))
  }

  render() {
    const { currentAdviceSlip } = this.state
    const { history } = this.props
    return(
      <div className="simple-react-layout">
        <header className="grid-container">
          <AdviceSlip adviceSlip={currentAdviceSlip} />
        </header>
        <main>
          <TabLayout history={history} />
        </main>
      </div>
    )
  }
}

export default SimpleReact