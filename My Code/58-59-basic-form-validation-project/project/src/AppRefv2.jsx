import { useState, useRef } from "react"
import { emailErrorHandler, passwordErrorHandler } from "./errorHandler"
import "../styles.css"

export function AppRefv2() {
  const email = useRef("")
  const password = useRef("")
  const [emailError,setEmailError] = useState([])
  const [passwordError,setPasswordError] = useState([])


  function handleSubmit(event) {
    event.preventDefault()

    const emailResult = emailErrorHandler(email.current.value)
    const passwordResult = passwordErrorHandler(password.current.value)
    setEmailError(emailResult)
    setPasswordError(passwordResult)
    
    if (emailResult.length === 0 && passwordResult.length === 0) {
      alert("Success")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className={`form-group ${emailError.length > 0 && "error"}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="email" id="Useremail" ref={email} />
          <div className="msg">
            {emailError.length > 0 && emailError.join(", ")}
          </div>
        </div>
        <div className={`form-group ${passwordError.length > 0 && "error"}`}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="Userpassword"
            ref={password}
          />
          <div className="msg">
            {passwordError.length > 0 && passwordError.join(", ")}
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
