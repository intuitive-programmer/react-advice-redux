import React, { Component } from 'react'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'
import AdviceSlipAPI from '../../apis/AdviceSlip'

class SimpleReact extends Component {
  state = {
    currentAdviceSlip: null,
    adviceSlips: [],
    savedAdvice: []
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
    this.setState({
      savedAdvice: JSON.parse(savedAdvice)
    })
  }

  getNextAdviceSlip = () => {
    const { currentAdviceSlip, adviceSlips } = this.state

    const currentIndex = adviceSlips
      .findIndex(slip => slip.slip_id === currentAdviceSlip.slip_id)

    const nextAdviceSlip = adviceSlips[currentIndex + 1]

    if (nextAdviceSlip) {
      this.setState({ currentAdviceSlip: nextAdviceSlip })
    } else {
      this.getRandomAdviceSlip()
    }
  }

  getPreviousAdviceSlip = () => {
    const { currentAdviceSlip, adviceSlips } = this.state

    const currentIndex = adviceSlips
      .findIndex(slip => slip.slip_id === currentAdviceSlip.slip_id)
    
    const prevAdviceSlip = adviceSlips[currentIndex - 1]

    if (prevAdviceSlip) {
      this.setState({ currentAdviceSlip: prevAdviceSlip })
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

  render() {
    const { currentAdviceSlip, savedAdvice } = this.state
    const { history } = this.props
    return(
      <div className="simple-react-layout">
        <header className="grid-container">
          <AdviceSlip
            adviceSlip={currentAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
            getPreviousAdviceSlip={this.getPreviousAdviceSlip}
            saveCurrentAdviceSlip={this.saveCurrentAdviceSlip}
          />
        </header>
        <main>
          <TabLayout
            history={history}
            savedAdvice={savedAdvice}  
          />
        </main>
      </div>
    )
  }
}

export default SimpleReact