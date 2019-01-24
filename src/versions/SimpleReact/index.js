import React from 'react'

import AdviceSlip from './components/AdviceSlip'
import TabLayout from './layouts/TabLayout'

const SimpleReact = () => (
  <div className="simple-react-layout">
    <header className="grid-container">
      <AdviceSlip />
    </header>
    <main>
      <TabLayout />
    </main>
  </div>
)

export default SimpleReact