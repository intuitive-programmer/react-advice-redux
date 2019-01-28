import React from 'react'

const Button = ({ children, onClick }) => (
  <button
    className="advice-slip-btn"
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button