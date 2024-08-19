import React, { useState } from "react"

export const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const handleTask = () => {
    if (!title) {
      console.log("Please enter the task")
      return
    }
    if (title) {
      setTasks([...tasks, { title }])
      setTitle("")
    }
  }
  console.log(tasks)
  return (
    <section>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <button onClick={handleTask} type="button" className="">
        Add a todo
      </button>
      <div>
        <ul>
          {tasks &&
            tasks?.map((task, index) => {
              return <li key={index}>{task.title}</li>
            })}
        </ul>
      </div>
    </section>
  )
}
