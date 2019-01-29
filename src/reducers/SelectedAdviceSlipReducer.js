const SelectedAdviceSlipReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_ADVICE_SLIP":
    return action.selectedAdviceSlip
    case "DESELECT":
    return null
    default:
    return state
  }
}

export default SelectedAdviceSlipReducer