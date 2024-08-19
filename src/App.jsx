import { useGeolocation } from "./hook/useGeolocation"

function App() {
  const { coords, error } = useGeolocation()
  console.log(error)
  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
      {error && <p> {error} </p>}
    </div>
  )
}

export default App
