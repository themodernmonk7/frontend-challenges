import React from "react"

export const Options = ({ optionSelect, setOptionSelect, handleText }) => {
  const handleChange = (e) => {
    setOptionSelect(e.target.value)
  }

  const options = [
    {
      id: 1,
      name: "Uppercase",
      label: "Convert text to Uppercase",
    },
    {
      id: 2,
      name: "Lowercase",
      label: "Convert text to Lowercase",
    },
    {
      id: 3,
      name: "Encode",
      label: "Encode Base64",
    },
    {
      id: 4,
      name: "Decode",
      label: "Decode Base64",
    },
  ]

  return (
    <div>
      {options?.map((option) => {
        return (
          <div key={option?.id}>
            <input
              onChange={handleChange}
              type="radio"
              name={option?.name}
              id={option?.name}
              value={option?.name}
              checked={optionSelect === option?.name}
            />
            <label htmlFor={option?.name}>{option?.label}</label>
          </div>
        )
      })}

      <button onClick={handleText} className="">
        Submit
      </button>
    </div>
  )
}
