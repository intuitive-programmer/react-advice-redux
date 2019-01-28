import React, { Fragment } from 'react'

import Button from './Button'

const AdviceSlip = ({ adviceSlip }) => {
  return(
    <Fragment>
      <div className="advice-slip flex-center light-shadow">
        <p>
          {adviceSlip && adviceSlip.advice}
        </p>
      </div>
      <div className="advice-slip-btns flex-center">
        <Button>PREV</Button>
        <Button>SAVE</Button>
        <Button>NEXT</Button>
      </div>
    </Fragment>
  )
}

export default AdviceSlip