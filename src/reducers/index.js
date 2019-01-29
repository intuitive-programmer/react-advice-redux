import { combineReducers } from 'redux'

import AdviceSlipsReducer from './AdviceSlipsReducer'
import CurrentIndexReducer from './CurrentIndexReducer'
import SavedAdviceReducer from './SavedAdviceReducer'

const rootReducer = combineReducers({
  adviceSlips: AdviceSlipsReducer,
  currentIndex: CurrentIndexReducer,
  savedAdvice: SavedAdviceReducer
})

export default rootReducer