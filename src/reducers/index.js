import { combineReducers } from 'redux'

import AdviceSlipsReducer from './AdviceSlipsReducer'

const rootReducer = combineReducers({
  adviceSlips: AdviceSlipsReducer
})

export default rootReducer