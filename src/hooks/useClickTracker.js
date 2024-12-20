// Create a custom hook in React that tracks the number of times a button has been clicked and the time of the most recent click. The hook should provide two pieces of state: count and lastClicked, and it should also provide a way for the component to increment the count.
/**
 * 1. Create a state to store the button click count value
 * 2. Another state to store the last click time
 * 3. return count and lastClick value from the hook
 * 4. Provide a way for the component to increment the count
 */

import { useCallback, useState } from "react"

export const useClickTracker = () => {
  const [state, setState] = useState({
    count: 0,
    lastClicked: null,
  })

  const handleClickTracker = useCallback(() => {
    setState((prevState) => ({
      count: prevState.count + 1,
      lastClicked: Date.now(),
    }))
  })

  return { state, handleClickTracker }
}
