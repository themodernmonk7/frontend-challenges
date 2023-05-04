import React, { useState } from "react"

/*
Approach:
1. User enter their email address
2. Client will verify the email from their database
3. If the email is found in their database then show password info
4. If not found then show Error message

*/

const TwoStepLoginForm = () => {
  const [track, setTrack] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateEmail = (e) => {
    e.preventDefault()
    if (email) {
      setTrack(1)
    } else {
      console.log("error")
    }
  }

  const validatePassword = () => {
    if (password) {
      console.log("success login")
    }
  }

  return (
    <>
      <section className=" grid place-items-center h-screen ">
        {track === 0 ? (
          <div className=" flex flex-col space-y-2 ">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              autoFocus
              autoComplete="on"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              className=" text-black "
            />
            <button onClick={validateEmail} className=" bg-teal-500 py-2 ">
              Next
            </button>
          </div>
        ) : (
          <div className=" flex flex-col space-y-2 ">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              autoFocus
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className=" text-black"
            />
            <button onClick={() => setTrack(0)} className=" bg-teal-500 py-2 ">
              Change Email
            </button>
            <button onClick={validatePassword} className=" bg-teal-500 py-2 ">
              Login
            </button>
          </div>
        )}
      </section>
    </>
  )
}
export default TwoStepLoginForm
