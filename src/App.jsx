import { useState } from "react"
import { BANK_UPI_HANDLES, GRAPHIC_URL } from "./constants/constants"

function App() {
  const [input, setInput] = useState("")
  const [predictValue, setPredictValue] = useState("")
  const [predictions, setPredictions] = useState([])

  const handleChange = (e) => {
    const {
      target: { value },
    } = e
    setInput(value.toLowerCase())

    if (!value || !value.includes("@")) {
      setPredictValue(value || "")
      setPredictions([])
      return
    }
    const [userVPA, userBankName] = value.split("@")

    if (!userVPA) return

    const userBankRegex = new RegExp(`${userBankName}`)
    const matchedBankNames = BANK_UPI_HANDLES.filter((bank) => {
      return userBankRegex.test(bank)
    })
    let currentPredictedBankName = matchedBankNames[0]
    if (userBankName && !matchedBankNames.length) {
      currentPredictedBankName = ""
    }
    setPredictValue(`${userVPA}@${currentPredictedBankName}`)
    setPredictions(matchedBankNames)
  }

  const handleKeyPressDown = (e) => {
    const { which = -1, keyCode = -1, code = "" } = e
    const isRightArrowKey =
      which === 39 || keyCode === 39 || code.toLowerCase() === "arrowrigh"
    const isTabKey =
      which === 9 || keyCode === 9 || code.toLowerCase() === "tab"
    if (isRightArrowKey || isTabKey) {
      setInput(predictValue)
      setPredictions([])
    }
  }

  const handleBankNameClicked = (e) => {
    const { target } = e
    const currentBankName = target.getAttribute("data-bank-name")
    const [currentUserVPA] = input.split("@")
    const updatedUpiId = `${currentUserVPA}@${currentBankName}`

    setInput(updatedUpiId)
    setPredictValue(updatedUpiId)
    setPredictions([])
  }

  return (
    <section className=" m-12 flex flex-col items-center justify-center space-y-4 rounded-md border border-green-400 p-4">
      <img src={GRAPHIC_URL} alt="payment upi" />
      <div className="relative">
        <input
          className="focus:none absolute left-0 top-0 -z-10 w-full border-b border-l-0 border-r-0 border-t-0 border-gray-400 lowercase opacity-50 focus:ring-0"
          type="text"
          value={predictValue}
          onChange={() => {}}
        />
        <input
          value={input}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Enter your UPI ID"
          className="focus:none z-10 w-full border-b border-l-0 border-r-0 border-t-0  border-gray-400 bg-transparent lowercase placeholder:text-xs placeholder:capitalize placeholder:text-gray-400 focus:ring-0"
          onKeyDown={handleKeyPressDown}
        />
        {predictions.length ? (
          <ul className="bottom-0-0 absolute z-30 flex max-h-40 w-full flex-col overflow-y-scroll border bg-white">
            {predictions.map((handle) => {
              return (
                <button
                  data-bank-name={handle}
                  onClick={(e) => handleBankNameClicked(e)}
                  key={handle}
                  className="border-b py-1 text-sm"
                >
                  {handle}
                </button>
              )
            })}
          </ul>
        ) : null}
      </div>
      <button className="w-full rounded-md bg-green-400 py-1 text-white shadow-md">
        Pay Now
      </button>
    </section>
  )
}

export default App
