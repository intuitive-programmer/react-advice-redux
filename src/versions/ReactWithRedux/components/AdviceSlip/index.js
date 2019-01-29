import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Button from './Button'

class AdviceSlip extends Component {

  render() {
    const { adviceSlip, displayNavBtns } = this.props
    return(
      <Fragment>
        <div className="advice-slip flex-center light-shadow">
          <p>
            {adviceSlip && adviceSlip.advice}
          </p>
        </div>
        <div className="advice-slip-btns flex-center">
          {displayNavBtns
            ? this.renderNavBtns()
            : this.renderBackAndDeleteBtn()
          }
        </div>
      </Fragment>
    )
  }

  renderNavBtns = () => {
    const { updateCurrentIndex, getNextAdviceSlip } = this.props
    return(
      <Fragment>
        <Button
          onClick={() => updateCurrentIndex("DECREASE")}
        >PREV</Button>
        <Button
          // onClick={saveCurrentAdviceSlip}
        >SAVE</Button>
        <Button
          onClick={getNextAdviceSlip}
        >NEXT</Button>
      </Fragment>
    )
  }

  renderBackAndDeleteBtn = () => {
    const { hideSavedAdviceSlip, deleteSavedAdvice } = this.props
    return(
      <Fragment>
        <Button
          onClick={hideSavedAdviceSlip}
        >BACK</Button>
        <Button
          onClick={deleteSavedAdvice}
        >DELETE</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  adviceSlip: state.adviceSlips[state.currentIndex]
})

const mapDispatchToProps = dispatch => ({
  updateCurrentIndex: type => dispatch({ type })
})

export default connect(mapStateToProps, mapDispatchToProps)(AdviceSlip)