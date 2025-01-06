import React from "react"
import { useIdle } from "../hooks/useIdle"

const DetectIdle = () => {
  const isIdle = useIdle(2000)
  console.log({ isIdle })
  return (
    <section>
      <p>User is: {isIdle ? "Not Active" : "Active"}</p>
      <p>
        {isIdle ? "You have been inactive for 2 seconds." : "Keep interacting!"}
      </p>
    </section>
  )
}

export default DetectIdle
