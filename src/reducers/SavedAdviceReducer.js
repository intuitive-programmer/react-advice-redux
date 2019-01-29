const hydrateStateWithLocalStorage = () => {
  const savedAdvice = localStorage.getItem("savedAdvice")
  if (savedAdvice) {
    return JSON.parse(savedAdvice)
  } else {
    return []
  }
}

const SavedAdviceReducer = (state = hydrateStateWithLocalStorage(), action) => {
  switch (action.type) {
    case "SAVE_ADVICE_SLIP":
    return save(state, action.adviceSlipToSave)
    case "DELETE_ADVICE_SLIP":
    return deleteAdviceSlip(state, action.adviceSlipToDelete)
    default:
    return state
  }
}

const save = (state, adviceSlipToSave) => {
  const savedAdvice = [...state, adviceSlipToSave]

  localStorage
    .setItem("savedAdvice", JSON.stringify(savedAdvice))

  return savedAdvice
}

const deleteAdviceSlip = (state, adviceSlipToDelete) => {
  const savedAdvice = state
    .filter(slip => slip.slip_id !== adviceSlipToDelete.slip_id)
  
  localStorage
    .setItem("savedAdvice", JSON.stringify(savedAdvice))

  return savedAdvice
}

export default SavedAdviceReducer