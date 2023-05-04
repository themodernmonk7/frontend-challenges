/*
- There will be two buttons
    1. start button
    2. stop button
- When I click on start button the counter should start from 0 and it should increment every one second
- When I click on stop this counter should pause.
- When I click on start button again then counter resume from where it stops
*/

import { useEffect, useRef, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  console.log(intervalRef)

  const handleStart = () => {
    setIsRunning(true)
  }
  const handleStop = () => {
    setIsRunning(false)
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isRunning])
  return (
    <>
      <section className=" space-x-10 m-10 text-center space-y-10 ">
        <p className=" text-3xl ">{count}</p>
        <button onClick={handleStart} className=" border  px-5 py-1">
          Start
        </button>
        <button onClick={handleStop} className=" border  px-5 py-1">
          Stop
        </button>
      </section>
    </>
  )
}

export default Counter
