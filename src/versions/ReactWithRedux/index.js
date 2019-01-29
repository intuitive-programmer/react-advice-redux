import React, { Component } from 'react'
import { connect } from 'react-redux'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import AdviceSlipAPI from '../../apis/AdviceSlip'

class ReactWithRedux extends Component {
  state = {
    currentAdviceSlip: null,
    currentIndex: 0,
    savedAdvice: [],
    displaySavedAdviceSlip: false
  }

  componentDidMount() {
    this.getRandomAdviceSlip()
    this.hydrateStateWithLocalStorage()
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
      this.setState(state => ({
        currentAdviceSlip: adviceSlipToAdd
      }))
      addAdviceSlip(adviceSlipToAdd)
    }
  }

  hydrateStateWithLocalStorage = () => {
    const savedAdvice = localStorage.getItem("savedAdvice")

    if (savedAdvice) {
      this.setState({
        savedAdvice: JSON.parse(savedAdvice)
      })
    }
  }

  getNextAdviceSlip = () => {
    const { currentIndex } = this.state
    const { adviceSlips } = this.props

    const nextAdviceSlip = adviceSlips[currentIndex + 1]

    if (nextAdviceSlip) {
      this.setState({
        currentAdviceSlip: nextAdviceSlip,
        currentIndex: currentIndex + 1
      })
    } else {
      this.getRandomAdviceSlip()
      this.setState({
        currentIndex: currentIndex + 1
      })
    }
  }

  getPreviousAdviceSlip = () => {
    const { currentIndex } = this.state
    const { adviceSlips } = this.props

    const prevAdviceSlip = adviceSlips[currentIndex - 1]

    if (prevAdviceSlip) {
      this.setState({
        currentAdviceSlip: prevAdviceSlip,
        currentIndex: currentIndex - 1
      })
    }
  }

  saveCurrentAdviceSlip = () => {
    const { currentAdviceSlip, savedAdvice } = this.state
    
    const alreadySaved = savedAdvice
      .find(slip => slip.slip_id === currentAdviceSlip.slip_id)

    if (alreadySaved) return

    const updatedSavedAdvice = [...savedAdvice, currentAdviceSlip]

    this.setState({ savedAdvice: updatedSavedAdvice })

    localStorage
      .setItem("savedAdvice", JSON.stringify(updatedSavedAdvice))
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
    const { currentIndex } = this.state
    const { adviceSlips } = this.props

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
    const { currentAdviceSlip, savedAdvice, displaySavedAdviceSlip } = this.state
    const { history } = this.props
    return(
      <div className="react-advice-layout">
        <header className="grid-container">
          <AdviceSlip
            adviceSlip={currentAdviceSlip}
            displayNavBtns={!displaySavedAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
            getPreviousAdviceSlip={this.getPreviousAdviceSlip}
            saveCurrentAdviceSlip={this.saveCurrentAdviceSlip}
            hideSavedAdviceSlip={this.hideSavedAdviceSlip}
            deleteSavedAdvice={this.deleteSavedAdvice}
          />
        </header>
        <main>
          <TabLayout
            history={history}
            savedAdvice={savedAdvice}
            displaySavedAdviceSlip={this.displaySavedAdviceSlip}
          />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adviceSlips: state.adviceSlips
})

const mapDispatchToProps = dispatch => ({
  addAdviceSlip: adviceSlipToAdd => dispatch({ type: "ADD_ADVICE_SLIP", adviceSlipToAdd })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactWithRedux)