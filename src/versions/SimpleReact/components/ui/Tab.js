import React from 'react'

const Tab = ({ label, id, onClick, active }) => (
  <div
    id={id}
    onClick={onClick}
    className={active
      ? "tab flex-center tab-active"
      : "tab flex-center"
    }
  >
    {label.toUpperCase()}
  </div>
)

export default Tab