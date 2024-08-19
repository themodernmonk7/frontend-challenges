import React, { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue !== null ? storedValue : initialValue
  })
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return { value, setValue }
}
