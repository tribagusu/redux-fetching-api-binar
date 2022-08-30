import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getData } from "../redux/actions/dataAction"

const Home = () => {
  const { users } = useSelector((state) => state.dataReducer)
  //   console.log("  🔸-> data", data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h4>{user.email}</h4>
          </div>
        ))}
    </div>
  )
}

export default Home
