import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getData } from "../redux/actions/dataAction"

const Home = () => {
  const data = useSelector((state) => state.dataReducer)
  const dispatch = useDispatch()
  //   console.log(data)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return <div>Home</div>
}

export default Home
