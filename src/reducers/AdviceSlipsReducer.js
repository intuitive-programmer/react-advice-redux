const AdviceSlipsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ADVICE_SLIP":
    return [...state, action.adviceSlipToAdd]
    default:
    return state
  }
}

export default AdviceSlipsReducer