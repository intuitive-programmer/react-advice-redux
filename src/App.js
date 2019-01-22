import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import PrimaryLayout from './layouts/PrimaryLayout'

const App = () => (
  <BrowserRouter>
    <Route path="/" component={PrimaryLayout} />
  </BrowserRouter>
)

export default App
