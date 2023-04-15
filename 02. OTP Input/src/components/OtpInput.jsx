import React, { useState } from "react"

const OtpInput = ({ value, valueLength, onChange }) => {
  return (
    <section className=" space-y-5 rounded-xl border  border-gray-600 bg-slate-900 p-10 shadow-2xl ">
      <h3 className=" text-center text-3xl font-medium ">OTP Verification</h3>
      <p className=" text-lg ">Please enter the code we have sent you.</p>

      <form action="" className="">
        {/* Input */}
        <div className=" flex items-center justify-between">
          {[1, 2, 3, 4, 5, 6].map((digit, index) => {
            return (
              <input
                key={index}
                //type="text" = browser expects an input filed to be a countable number rather than a sequence of multiple numbers, which can cause unexpected behavior.
                type="text"
                //inputMode="number" = changes the mobile keyboard to numbers only
                inputMode="number"
                // autoComplete="one-time-code" = whenever a user receive a SMS message while a from is open, the operating system will parse the OTP in the SMS heuristically and the keyboard will suggest the OTP for the user to enter.
                autoComplete="one-time-code"
                style={{ WebkitAppearance: "none", margin: 0 }}
                className="w-10 appearance-none  border-l-0  border-r-0 border-t-0  bg-transparent p-0 text-center text-xl text-white focus:border-yellow-400 focus:ring-0 "
                required
                maxLength={6}
                value={digit}
                pattern="/d{1}"
              />
            )
          })}
        </div>
        <div className=" pt-10 ">
          <button type="submit" className="w-full bg-green-500 p-2  ">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default OtpInput
