import React, { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const name = e.target.name
    const input = e.target.value
    setValue({ ...value, [name]: input })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setValue({ email: "", password: "" })
    console.log("login success")
    try {
      const response = await fetch("some url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
      const data = await response.json()
      setErrorMessage(data.msg)
    } catch (error) {
      //   console.log(error)
      //   setErrorMessage(error.msg)
      console.log(error.msg)
    }
  }

  return (
    <section className=" flex p-20 ">
      <div className=" space-y-10 ">
        <h1 className=" text-xl font-medium text-slate-700 ">
          Welcome to Devtools Tech
        </h1>
        <h2 className=" text-3xl ">Login</h2>
        <p>{errorMessage}</p>
        <form action="" className=" space-y-4 " onSubmit={handleSubmit}>
          <div className=" ">
            <input
              name="email"
              required
              onChange={handleChange}
              value={value.email}
              type="email"
              placeholder="Email"
              pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className=" w-full "
            />
          </div>
          <div className="">
            <input
              onChange={handleChange}
              required
              name="password"
              value={value.password}
              type="password"
              placeholder="Password"
              className=" w-full"
              //   pattern="^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$"
              title="Please 8 character password"
              min={8}
            />
          </div>
          <div className=" space-x-4 ">
            <span className=""> Remember me</span>
            <span className="">Forget Password?</span>
          </div>
          <button
            type="submit"
            className=" w-full rounded-md bg-slate-800 py-3  text-white"
          >
            Login
          </button>
        </form>
        {/* <p className="">
        {" "}
        Don't have an account?
      </p> */}
        {/* <Link to="#"> Get Started </Link> */}
      </div>
    </section>
  )
}

export default LoginForm
