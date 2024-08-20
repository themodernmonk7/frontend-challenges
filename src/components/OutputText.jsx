import React from "react"

export const OutputText = ({ outputText }) => {
  return (
    <div>
      <p className="">Converted text is:</p>
      <p>{outputText}</p>
    </div>
  )
}
