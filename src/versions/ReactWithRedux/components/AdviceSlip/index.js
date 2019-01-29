import React, { Fragment } from 'react'

import Button from './Button'

const AdviceSlip = ({
  adviceSlip,
  displayNavBtns,
  getNextAdviceSlip,
  getPreviousAdviceSlip,
  saveCurrentAdviceSlip,
  hideSavedAdviceSlip,
  deleteSavedAdvice }) => {
  
  const renderNavBtns = () => (
    <Fragment>
      <Button
        onClick={getPreviousAdviceSlip}
      >PREV</Button>
      <Button
        onClick={saveCurrentAdviceSlip}
      >SAVE</Button>
      <Button
        onClick={getNextAdviceSlip}
      >NEXT</Button>
    </Fragment>
  )

  const renderBackAndDeleteBtn = () => (
    <Fragment>
      <Button
        onClick={hideSavedAdviceSlip}
      >BACK</Button>
      <Button
        onClick={deleteSavedAdvice}
      >DELETE</Button>
    </Fragment>
  )

  return(
    <Fragment>
      <div className="advice-slip flex-center light-shadow">
        <p>
          {adviceSlip && adviceSlip.advice}
        </p>
      </div>
      <div className="advice-slip-btns flex-center">
        {displayNavBtns
          ? renderNavBtns()
          : renderBackAndDeleteBtn()
        }
      </div>
    </Fragment>
  )
}

export default AdviceSlip