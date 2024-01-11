import { useEffect, useState } from "react"
import { useInput } from "./useInput"
import "../styles.css"

function App() {
  const emailInput = useInput("")
  const passwordInput = useInput("")

  const [render, setRender] =useState(false)

  const [passwordError, setPasswordError] = useState()
  const [emailError, setEmailError] = useState()
  console.log(passwordInput.value)

  useEffect(()=>{
    if(render)
    {
      if (emailInput.value && checkEmail(emailInput.value)) {
        setEmailError(false)
      } else {
        setEmailError(true)
      }
    }

  },[render, emailInput.value])

  const handleSubmit = (e) => {
    setRender(true)
    e.preventDefault()

    if (emailInput.value && checkEmail(emailInput.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    if (
      passwordInput.value &&
      checkLower(passwordInput.value) &&
      checkUpper(passwordInput.value) &&
      checkDigit(passwordInput.value) &&
      passwordInput.value.length >= 10
    ) {
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
    if (passwordError === false && emailError === false) {
      alert("Success!!")
    }
  }

  const checkLower = (string) => {
    return /[a-z]/.test(string)
  }
  const checkUpper = (string) => {
    return /[A-Z]/.test(string)
  }
  const checkDigit = (string) => {
    return /[0-9]/.test(string)
  }
  const checkEmail = (string) => {
    return /@webdevsimplified.com$/.test(string)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group error">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="email" id="email" {...emailInput} />
          {emailError && (
            <div className="msg">Must end in @webdevsimplified.com</div>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            {...passwordInput}
            type="password"
            id="password"
          />
          {passwordError &&
            "Password must contain at least one number, one uppercase letter,one lowercase letter, and be at least 10 characters long."}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default App
