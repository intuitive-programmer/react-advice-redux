import React from 'react'

import List from '../components/SavedAdvice/List'
import Item from '../components/SavedAdvice/Item'

const SavedAdvice = () => (
  <div className="grid-container">
    <List>
      <Item>An Item</Item>
      <Item>An Item</Item>
    </List>
  </div>
)

export default SavedAdvice