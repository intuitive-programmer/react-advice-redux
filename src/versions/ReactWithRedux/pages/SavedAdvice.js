import React from 'react'
import { connect } from 'react-redux'

import List from '../components/SavedAdvice/List'
import Item from '../components/SavedAdvice/Item'

const SavedAdvice = ({ savedAdvice, select }) => {
  const renderSavedAdvice = () => (
    savedAdvice.map((slip, index) => (
      <Item
        key={index}
        onClick={() => select(slip)}
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

const mapDispatchToProps = dispatch => ({
  select: selectedAdviceSlip => dispatch({ type: "SELECT_ADVICE_SLIP", selectedAdviceSlip })
})

export default connect(mapStateToProps, mapDispatchToProps)(SavedAdvice)