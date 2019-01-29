import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  savedAdvice: state.savedAdvice
})

export default connect(mapStateToProps)(SavedAdvice)