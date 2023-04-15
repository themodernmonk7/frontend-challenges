import { useState } from "react"
import { OtpInput } from "./components"

function App() {
  const [otp, setOtp] = useState("")

  const onChange = () => {
    setOtp(otp)
  }
  return (
    <section className=" grid h-screen place-items-center ">
      <OtpInput value={otp} valueLength={6} onChange={onChange} />
    </section>
  )
}

export default App
