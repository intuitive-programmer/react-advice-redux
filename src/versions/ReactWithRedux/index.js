import React, { Component } from 'react'
import { connect } from 'react-redux'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import { getRandomAdviceSlip } from '../../reducers/AdviceSlipsReducer'

class ReactWithRedux extends Component {

  componentDidMount() {
    const { getRandomAdviceSlip, adviceSlips } = this.props
    
    getRandomAdviceSlip(adviceSlips)
  }

  getNextAdviceSlip = () => {
    const { getRandomAdviceSlip, adviceSlips, currentIndex, updateCurrentIndex } = this.props

    const nextAdviceSlip = adviceSlips[currentIndex + 1]

    if (nextAdviceSlip) {
      updateCurrentIndex("INCREASE")
    } else {
      getRandomAdviceSlip(adviceSlips)
      updateCurrentIndex("INCREASE")
    }
  }

  render() {
    const { history } = this.props
    return(
      <div className="react-advice-layout">
        <header className="grid-container">
          <AdviceSlip getNextAdviceSlip={this.getNextAdviceSlip} />
        </header>
        <main>
          <TabLayout history={history} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adviceSlips: state.adviceSlips,
  currentIndex: state.currentIndex
})

const mapDispatchToProps = dispatch => ({
  getRandomAdviceSlip: adviceSlips => dispatch(getRandomAdviceSlip(adviceSlips)),
  updateCurrentIndex: type => dispatch({ type })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactWithRedux)