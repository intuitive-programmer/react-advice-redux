const CurrentIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
    return state + 1
    case "DECREASE":
    return state > 0 ? state - 1 : state
    default:
    return state
  }
}

export default CurrentIndexReducer