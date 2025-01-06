/**
 * A user is considered to be inactive or idle if he is not performing any sort of action using interaction hardware like a mouse, or keyboard for desktops and laptops and touch on mobile and tablets.
 * For this, there are a set of events that we can listen to like mousemove, mousedown, keypress, DOMMouseScroll, mousewheel, touchmove, MSPointerMove.
 *
 * Create a hook that return the boolean value
 *
 */

import { useEffect, useRef, useState } from "react"

export const useIdle = (delay) => {
  const [isIdle, setIsIdle] = useState(false)
  const timeoutId = useRef(null)

  const startTimer = () => {
    timeoutId.current = setTimeout(() => {
      setIsIdle(true)
    }, delay)
  }

  const resetTimer = () => {
    console.log("reset timer")
    clearTimeout(timeoutId.current)
    setIsIdle(false)
    startTimer()
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      startTimer()
    } else {
      resetTimer()
    }
  }

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "DOMMouseScroll",
      "mousewheel",
      "touchmove",
      "MSPointerMove",
    ]

    events.forEach((event) => {
      document.addEventListener(event, resetTimer, false)
    })
    // handle tab visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange())

    startTimer()

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer)
      })
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      clearTimeout(timeoutId.current)
    }
  }, [delay])
  return isIdle
}
