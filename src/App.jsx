import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setProgressValue((value) => value + 1)
    }, 100)
  }, [])
  return (
    <section className="mt-12 flex w-full flex-col items-center gap-4">
      <ProgressBar value={progressValue} />
    </section>
  )
}

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value)

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)))
  }, [value])
  return (
    <>
      <div className="relative h-5 w-80 rounded-full border border-black bg-gray-200">
        <span className=" flex w-full items-center overflow-hidden">
          {percentage.toFixed()}%
        </span>
        <div
          style={{ width: `${percentage}%` }}
          className="absolute top-0 h-full rounded-full bg-green-500"
        ></div>
      </div>
    </>
  )
}

export default App
