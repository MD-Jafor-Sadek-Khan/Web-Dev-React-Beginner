import { useState } from "react"
import { emailErrorHandler, passwordErrorHandler } from "./errorHandler"
import "../styles.css"

export function AppStatev2() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [render, setRender] = useState(false)

  const emailError = render ? emailErrorHandler(email) : []
  const passwordError = render ? passwordErrorHandler(password) : []

  function handleSubmit(event) {
    event.preventDefault()
    setRender(true)

    const emailResult = emailErrorHandler(email)
    const passwordResult = passwordErrorHandler(password)

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
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
