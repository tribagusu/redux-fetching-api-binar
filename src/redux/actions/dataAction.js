import axios from "axios"
import TYPES from "../types"

export const getDataSuccess = (users) => {
  return {
    type: TYPES.FETCH_DATA,
    payload: users,
  }
}

export const getData = () => (dispatch) => {
  dispatch(getDataSuccess)
  axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      const users = res.data.data
      dispatch(getDataSuccess(users))
      console.log(users)
    })
    .catch((err) => {
      // const error = err.message
      console.log(err)
    })
}
