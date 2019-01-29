import React, { Component } from 'react'
import { connect } from 'react-redux'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import AdviceSlipAPI from '../../apis/AdviceSlip'

class ReactWithRedux extends Component {
  state = {
    displaySavedAdviceSlip: false
  }

  componentDidMount() {
    this.getRandomAdviceSlip()
  }

  async getRandomAdviceSlip() {
    const { adviceSlips, addAdviceSlip } = this.props
    const adviceSlipToAdd = await AdviceSlipAPI
      .getRandomAdviceSlip()
      .then(data => data.slip) 
    
    const alreadyExists = adviceSlips
      .find(slip => slip.slip_id === adviceSlipToAdd.slip_id)

    if (alreadyExists) {
      this.getRandomAdviceSlip()
    } else {
      addAdviceSlip(adviceSlipToAdd)
    }
  }

  getNextAdviceSlip = () => {
    const { adviceSlips, currentIndex, updateCurrentIndex } = this.props

    const nextAdviceSlip = adviceSlips[currentIndex + 1]

    if (nextAdviceSlip) {
      updateCurrentIndex("INCREASE")
    } else {
      this.getRandomAdviceSlip()
      updateCurrentIndex("INCREASE")
    }
  }

  displaySavedAdviceSlip = id => {
    const { savedAdvice } = this.state

    const selectedSlip = savedAdvice
      .find(slip => slip.slip_id === id)

    this.setState({
      currentAdviceSlip: selectedSlip,
      displaySavedAdviceSlip: true
    })
  }

  hideSavedAdviceSlip = () => {
    const { adviceSlips, currentIndex } = this.props

    this.setState({
      currentAdviceSlip: adviceSlips[currentIndex],
      displaySavedAdviceSlip: false
    })
  }

  deleteSavedAdvice = ()  => {
    const { currentAdviceSlip, savedAdvice } = this.state

    const updatedSavedAdvice = savedAdvice
      .filter(slip => slip.slip_id !== currentAdviceSlip.slip_id)

    this.setState({
      savedAdvice: updatedSavedAdvice,
    })

    localStorage
      .setItem("savedAdvice", JSON.stringify(updatedSavedAdvice))

    this.hideSavedAdviceSlip()
  }

  render() {
    const { displaySavedAdviceSlip } = this.state
    const { history } = this.props
    return(
      <div className="react-advice-layout">
        <header className="grid-container">
          <AdviceSlip
            displayNavBtns={!displaySavedAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
            hideSavedAdviceSlip={this.hideSavedAdviceSlip}
            deleteSavedAdvice={this.deleteSavedAdvice}
          />
        </header>
        <main>
          <TabLayout
            history={history}
            displaySavedAdviceSlip={this.displaySavedAdviceSlip}
          />
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
  addAdviceSlip: adviceSlipToAdd => dispatch({ type: "ADD_ADVICE_SLIP", adviceSlipToAdd }),
  updateCurrentIndex: type => dispatch({ type })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactWithRedux)