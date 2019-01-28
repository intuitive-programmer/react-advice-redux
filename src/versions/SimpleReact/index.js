import React, { Component } from 'react'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import AdviceSlipAPI from '../../apis/AdviceSlip'

class SimpleReact extends Component {
  state = {
    currentAdviceSlip: null,
    currentIndex: 0,
    adviceSlips: [],
    savedAdvice: [],
    displaySavedAdviceSlip: false
  }

  componentDidMount() {
    this.getRandomAdviceSlip()
    this.hydrateStateWithLocalStorage()
  }

  async getRandomAdviceSlip() {
    const { adviceSlips } = this.state
    const randomSlip = await AdviceSlipAPI
      .getRandomAdviceSlip()
      .then(data => data.slip) 
    
    const alreadyExists = adviceSlips
      .find(slip => slip.slip_id === randomSlip.slip_id)

    if (alreadyExists) {
      this.getRandomAdviceSlip()
    } else {
      this.setState(state => ({
        currentAdviceSlip: randomSlip,
        adviceSlips: [...state.adviceSlips, randomSlip]
      }))
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
    const { currentIndex, adviceSlips } = this.state

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
    const { currentIndex, adviceSlips } = this.state
    
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
    const { currentIndex, adviceSlips } = this.state

    this.setState({
      currentAdviceSlip: adviceSlips[currentIndex],
      displaySavedAdviceSlip: false
    })
  }

  render() {
    const { currentAdviceSlip, savedAdvice, displaySavedAdviceSlip } = this.state
    const { history } = this.props
    console.log(this.state)
    return(
      <div className="simple-react-layout">
        <header className="grid-container">
          <AdviceSlip
            adviceSlip={currentAdviceSlip}
            displayNavBtns={!displaySavedAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
            getPreviousAdviceSlip={this.getPreviousAdviceSlip}
            saveCurrentAdviceSlip={this.saveCurrentAdviceSlip}
            hideSavedAdviceSlip={this.hideSavedAdviceSlip}
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

export default SimpleReact