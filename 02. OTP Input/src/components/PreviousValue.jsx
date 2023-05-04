import React, { useEffect, useRef, useState } from "react"

const usePrevious = (value) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const PreviousValue = () => {
  const [count, setCount] = useState(0)
  const PreviousValue = usePrevious(count)
  return (
    <>
      <section className="">
        <p className="">Previous Value: {PreviousValue} </p>
        <p className="">Count: {count} </p>
        <button onClick={() => setCount(count + 1)} className="">
          Increase
        </button>
      </section>
    </>
  )
}

export default PreviousValue
