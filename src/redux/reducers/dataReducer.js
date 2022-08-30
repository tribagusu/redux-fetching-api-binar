import {
  LOADING_DATA,
  FETCH_DATA,
  LOADED_DATA_SUCCESS,
  LOADED_DATA_ERROR,
} from "../types"

const initState = {
  loading: false,
  data: [],
  error: "",
}

const dataReducer = (state = initState, action) => {
  return state
}

export default dataReducer
