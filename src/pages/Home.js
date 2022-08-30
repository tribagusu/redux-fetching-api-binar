import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getData } from "../redux/actions/dataAction"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return <div>Home</div>
}

export default Home
