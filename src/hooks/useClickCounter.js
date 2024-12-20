// You need to create a custom hook that tracks the number of clicks on a button in a React component and provides a way for the component to increment the count.
/**
 * 1. use state to store the click count
 * 2. a function to update the click count
 */

import { useState } from "react"

export const useClickCounter = () => {
  const [count, setCount] = useState(0)

  const handleClickCount = () => {
    setCount((count) => count + 1)
  }
  return { count, handleClickCount }
}
