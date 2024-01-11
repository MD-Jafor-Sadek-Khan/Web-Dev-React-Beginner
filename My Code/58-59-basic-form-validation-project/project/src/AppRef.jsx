import { useRef } from "react"
import "../styles.css"

function AppRef() {
  const emailInputRef = useRef("")
  const passwordInputRef = useRef("")

  const passwordErrorRef = useRef(false)
  const emailErrorRef = useRef(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    checkEmail(emailInputRef.current.value)

    checkPassword(passwordInputRef.current.value)

    if (passwordErrorRef.current === false && emailErrorRef.current === false) {
      alert("Success!!")
    }
  }
  

  const checkPassword = (string) => {
    passwordErrorRef.current =
      !(/[a-z]/.test(string) &&
      /[A-Z]/.test(string) &&
      /[0-9]/.test(string) &&
      string.length >= 10)
  }

  const checkEmail = (string) => {
    emailErrorRef.current =
      !(/@webdevsimplified.com$/.test(string) && string.length !== 0)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group error">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            ref={emailInputRef}
          />
          {emailErrorRef.current ? (
            <div className="msg">Must end in @webdevsimplified.com</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            ref={passwordInputRef}
          />
          {passwordErrorRef.current
            ? "Password must contain at least one number, one uppercase letter,one lowercase letter, and be at least 10 characters long."
            : ""}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default AppRef
