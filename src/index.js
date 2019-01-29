import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import App from './App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
