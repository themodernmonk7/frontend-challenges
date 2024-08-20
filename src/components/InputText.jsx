import React from "react"

export const InputText = ({ inputText, setInputText }) => {
  return (
    <div>
      <p className="">Text to be converted:</p>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="3"
        resize="none"
        placeholder="What needs to be converted"
      ></textarea>
    </div>
  )
}
