import React from 'react'

import List from '../components/SavedAdvice/List'
import Item from '../components/SavedAdvice/Item'

const SavedAdvice = ({ savedAdvice, displaySavedAdviceSlip }) => {
  const renderSavedAdvice = () => (
    savedAdvice.map((slip, index) => (
      <Item
        key={index}
        onClick={() => displaySavedAdviceSlip(slip.slip_id)}
      >
        {slip.advice}
      </Item>
    ))
  )
  
  return(
    <div className="grid-container">
      <List>
        {renderSavedAdvice()}
      </List>
    </div>
  )
}
export default SavedAdvice