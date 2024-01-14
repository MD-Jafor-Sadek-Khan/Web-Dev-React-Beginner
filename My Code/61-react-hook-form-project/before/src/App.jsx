import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"
import { useForm, useController } from "react-hook-form"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm()

  const { field}= useController({name:"country", control, rules:{required:{value:true, message:"Required"}}})
  const passwordRef = useRef()
  const countryRef = useRef()

  const [passwordErrors, setPasswordErrors] = useState([])
  const [countryErrors, setCountryErrors] = useState([])

  function onSubmit(data) {
    console.log(data)
    alert("Success")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorHandler={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Required" },
            validate: (value) => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Must end with @webdevsimplified.com"
              }
            },
          })}
        />
      </FormGroup>
      <FormGroup errorHandler={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "Required" },
            validate: {
              passwordLength: (value) => {
                if (value.length < 10) {
                  return "Must be at least 10 characters"
                }
              },
              lower: (value) => {
                if (!value.match(/[a-z]/)) {
                  return "Must include at least 1 lowercase letter"
                }
              },
              upper: (value) => {
                if (!value.match(/[A-Z]/)) {
                  return "Must include at least 1 uppercase letter"
                }
              },
              digit: (value) => {
                if (!value.match(/[0-9]/)) {
                  return "Must include at least 1 number"
                }
              },
            },
          })}
        />
      </FormGroup>
      <FormGroup errorHandler={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          {...field}
          options={COUNTRY_OPTIONS}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
