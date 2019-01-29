import { combineReducers } from 'redux'

import AdviceSlipsReducer from './AdviceSlipsReducer'
import CurrentIndexReducer from './CurrentIndexReducer'

const rootReducer = combineReducers({
  adviceSlips: AdviceSlipsReducer,
  currentIndex: CurrentIndexReducer
})

export default rootReducer