import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Button from './Button'

class AdviceSlip extends Component {

  saveAdviceSlip = () => {
    const { save, adviceSlip, savedAdvice } = this.props

    const alreadySaved = savedAdvice
      .find(slip => slip.slip_id === adviceSlip.slip_id)

    if (alreadySaved) return

    save(adviceSlip)
  }

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
          onClick={this.saveAdviceSlip}
        >SAVE</Button>
        <Button
          onClick={getNextAdviceSlip}
        >NEXT</Button>
      </Fragment>
    )
  }

  renderBackAndDeleteBtn = () => {
    const { hideSavedAdviceSlip, deleteSavedAdvice, adviceSlip } = this.props
    return(
      <Fragment>
        <Button
          onClick={hideSavedAdviceSlip}
        >BACK</Button>
        <Button
          onClick={() => {
            deleteSavedAdvice(adviceSlip)
            hideSavedAdviceSlip()
          }}
        >DELETE</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  adviceSlip: state.selectedAdviceSlip
    ? state.selectedAdviceSlip
    : state.adviceSlips[state.currentIndex],
  savedAdvice: state.savedAdvice,
  displayNavBtns: !state.selectedAdviceSlip
})

const mapDispatchToProps = dispatch => ({
  updateCurrentIndex: type => dispatch({ type }),
  save: adviceSlipToSave => dispatch({
    type: "SAVE_ADVICE_SLIP", adviceSlipToSave
  }),
  deleteSavedAdvice: adviceSlipToDelete => dispatch({
    type: "DELETE_ADVICE_SLIP", adviceSlipToDelete
  }),
  hideSavedAdviceSlip: () => dispatch({ type: "DESELECT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(AdviceSlip)