import React, { Fragment } from 'react'

import Button from './Button'

const AdviceSlip = () => {
  return(
    <Fragment>
      <div className="advice-slip light-shadow">
          
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