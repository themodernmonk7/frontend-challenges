import { useLocalStorage } from "./hook/useLocalStorage"

function App() {
  const { value, setValue } = useLocalStorage("some_key", "")
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input value={value} onChange={handleChange} type="text" />
    </div>
  )
}

export default App
