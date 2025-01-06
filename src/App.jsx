import DetectIdle from "./components/DetectIdle"
import { Products } from "./components/Products"
import { useClickCounter } from "./hooks/useClickCounter"
import { useClickTracker } from "./hooks/useClickTracker"
import { useFetch } from "./hooks/useFetch"
import { useIdle } from "./hooks/useIdle"
import { useMousePosition } from "./hooks/useMousePosition"
import { IDLE, PENDING, REJECTED } from "./utils/actions/actions"
const API_URL = "https://fakestoreapi.com/products"
// const API_URL = "https://httpbin.org/status/200"

function App() {
  // const [position] = useMousePosition()
  // const { count, handleClickCount } = useClickCounter()
  // const { state, handleClickTracker } = useClickTracker()
  const { data, status, error } = useFetch(API_URL)

  if (status === PENDING || status === IDLE) {
    return <p>Loading...</p>
  }
  if (status === REJECTED) {
    return <p> {error} </p>
  }
  return (
    <section className="">
      {/* <p className="">X: {position.x}</p>
      <p className="">Y: {position.y}</p> */}
      {/* <div>
        <p className="">
          Button has been clicked {state.count}{" "}
          {state.count > 1 ? "times" : "time"}
        </p>
        <p>
          Last clicked at:{" "}
          {state.lastClicked
            ? new Date(state.lastClicked).toLocaleString()
            : "never"}
        </p>
        <button onClick={handleClickTracker}>Click Me</button>
      </div> */}
      {/* <Products data={data} /> */}
      <DetectIdle />
    </section>
  )
}

export default App
