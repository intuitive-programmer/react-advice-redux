import AdviceSlipAPI from '../apis/AdviceSlip'

const AdviceSlipsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ADVICE_SLIP":
    return [...state, action.adviceSlipToAdd]
    default:
    return state
  }
}

export const getRandomAdviceSlip = adviceSlips => {
  return async dispatch => {
    const randomAdviceSlip = await AdviceSlipAPI
      .getRandomAdviceSlip()
      .then(data => data.slip) 
    
    const alreadyExists = adviceSlips
      .find(slip => slip.slip_id === randomAdviceSlip.slip_id)
    if (alreadyExists) {
      getRandomAdviceSlip()
    } else {
      dispatch({ type: "ADD_ADVICE_SLIP", adviceSlipToAdd: randomAdviceSlip })
    }
  }
}

export default AdviceSlipsReducer