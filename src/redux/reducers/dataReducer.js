import TYPES from "../types"

const initState = {
  users: [],
}

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {
        users: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer
