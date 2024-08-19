import React, { useEffect, useState } from "react"

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords
        setCoords({
          latitude,
          longitude,
        })
      })
    } else {
      setError("Geolocation is not supported")
    }
  }, [])

  return { coords, error }
}
