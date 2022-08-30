import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const Home = () => {
  const data = useSelector((state) => state.dataReducer)
  console.log(data)

  return <div>Home</div>
}

export default Home
