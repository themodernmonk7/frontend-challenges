import React, { useState } from "react"

const ToggleStatus = () => {
  return <CoworkersList />
}

const CoworkersList = (props) => {
  const { coworkers } = props

  /*
  const initialValue = coworkers.reduce((acc, curr) => {
    acc[curr.id] = true
    return acc
  }, {})

const [status, setStatus] = useState(initialValue)

*/

  const [status, setStatus] = useState(
    Object.fromEntries(coworkers.map(({ id }) => [id, true]))
  )

  const handleStatus = (id) => {
    setStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <>
      {coworkers.map((coworker) => {
        const { first_name, last_name, id } = coworker
        return (
          <h2 key={id} className=" text-center ">
            {" "}
            {first_name} {last_name}{" "}
            <button
              onClick={() => handleStatus(id)}
              className={`${status[id] ? "text-green-400" : "text-red-400"} `}
            >
              {status[id] ? "online" : "offline"}
            </button>
          </h2>
        )
      })}
    </>
  )
}

CoworkersList.defaultProps = {
  coworkers: [
    { id: 1, first_name: "Rahul", last_name: "Kumar" },
    { id: 2, first_name: "Ram", last_name: "Kumar" },
    { id: 3, first_name: "Shyam", last_name: "Kumar" },
  ],
}

export default ToggleStatus
