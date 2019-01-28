import React from 'react'

const Item = ({ children, onClick }) => (
  <li
    className="saved-advice-item ellipsis"
    onClick={onClick}
  >{children}</li>
)

export default Item