import TYPES from "../types"

const initState = {
  data: [],
}

const dataReducer = (state = initState, action) => {
  switch (action.ty) {
    case TYPES.FETCH_DATA:
      return {
        data: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer
