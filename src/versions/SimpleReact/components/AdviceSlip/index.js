import React, { Fragment } from 'react'

import Button from './Button'

const AdviceSlip = ({
  adviceSlip,
  getNextAdviceSlip,
  getPreviousAdviceSlip,
  saveCurrentAdviceSlip }) => {
  return(
    <Fragment>
      <div className="advice-slip flex-center light-shadow">
        <p>
          {adviceSlip && adviceSlip.advice}
        </p>
      </div>
      <div className="advice-slip-btns flex-center">
        <Button
          onClick={getPreviousAdviceSlip}
        >PREV</Button>
        <Button
          onClick={saveCurrentAdviceSlip}
        >SAVE</Button>
        <Button
          onClick={getNextAdviceSlip}
        >NEXT</Button>
      </div>
    </Fragment>
  )
}

export default AdviceSlip