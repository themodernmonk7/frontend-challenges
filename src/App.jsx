import { useState } from "react"
import { Header } from "./components/Header"
import { InputText } from "./components/InputText"
import { Options } from "./components/Options"
import { OutputText } from "./components/OutputText"

/**
 * 1. Check input text and handle edge case
 * 2. Select option
 * 3. Run the final function
 * 4. Store the result in state
 * 5. Display the result on the UI
 * @returns
 */

function App() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [optionSelect, setOptionSelect] = useState("")

  const transformation = {
    Uppercase: (text) => text.toUpperCase(),
    Lowercase: (text) => text.toLowerCase(),
    Encode: (text) => window.btoa(text),
    Decode: (text) => window.atob(text),
  }

  const handleText = () => {
    if (!inputText) return console.log("Please enter some text")
    if (!optionSelect) return console.log("Please select an option")

    const transformText = transformation[optionSelect]
    if (transformText) {
      const resultText = transformText(inputText)
      setOutputText(resultText)
    } else {
      console.log("Please select a valid option")
    }
  }
  return (
    <div>
      <Header />
      <InputText inputText={inputText} setInputText={setInputText} />
      <Options
        optionSelect={optionSelect}
        setOptionSelect={setOptionSelect}
        handleText={handleText}
      />
      {outputText && <OutputText outputText={outputText} />}
    </div>
  )
}

export default App
