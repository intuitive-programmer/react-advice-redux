import { combineReducers } from 'redux'

import AdviceSlipsReducer from './AdviceSlipsReducer'
import CurrentIndexReducer from './CurrentIndexReducer'
import SavedAdviceReducer from './SavedAdviceReducer'
import SelectedAdviceSlipReducer from './SelectedAdviceSlipReducer'

const rootReducer = combineReducers({
  adviceSlips: AdviceSlipsReducer,
  currentIndex: CurrentIndexReducer,
  savedAdvice: SavedAdviceReducer,
  selectedAdviceSlip: SelectedAdviceSlipReducer
})

export default rootReducer