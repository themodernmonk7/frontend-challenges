import { useEffect, useState } from "react"
import { IDLE, PENDING, REJECTED, SUCCESSFUL } from "../utils/actions/actions"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(IDLE)

  const fetchData = async () => {
    try {
      setStatus(PENDING)
      const response = await fetch(url)
      if (!response?.ok) {
        setStatus(REJECTED)
        throw new Error(
          `Failed to load. HTTP Response code: ${response?.status}`
        )
      }
      const data = await response.json()
      setData(data)
      setStatus(SUCCESSFUL)
    } catch (error) {
      setStatus(REJECTED)
      console.log(error.message)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])
  return { data, status, error }
}
