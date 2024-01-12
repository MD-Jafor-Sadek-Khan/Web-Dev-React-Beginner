import { useEffect, useRef, useState } from "react"
import "../styles.css"

function AppRef() {
  const emailInputRef = useRef("")
  const passwordInputRef = useRef("")

  const passwordErrorRef = useRef(false)
  const emailErrorRef = useRef(false)
  let password
  let email

  const [render, setRender] = useState(false)
  
  useEffect(()=>{
    
  },[render])


  const handleSubmit = (e) => {
    setRender(prev => !prev)
    e.preventDefault()

    checkEmail(emailInputRef.current.value)

    checkPassword(passwordInputRef.current.value)

    email = emailErrorRef.current ? (
      <div className="msg">Must end in @webdevsimplified.com</div>
    ) : (
      ""
    )

    password = passwordErrorRef.current
      ? "Password must contain at least one number, one uppercase letter,one lowercase letter, and be at least 10 characters long."
      : ""

    if (passwordErrorRef.current === false && emailErrorRef.current === false) {
      alert("Success!!")
    }
  }

  const checkPassword = (string) => {
    passwordErrorRef.current = !(
      /[a-z]/.test(string) &&
      /[A-Z]/.test(string) &&
      /[0-9]/.test(string) &&
      string.length >= 10
    )
  }

  const checkEmail = (string) => {
    emailErrorRef.current = !(
      /@webdevsimplified.com$/.test(string) && string.length !== 0
    )
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
          {email}
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
          {password}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default AppRef
