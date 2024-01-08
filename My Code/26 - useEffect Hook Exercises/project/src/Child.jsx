import { useState, useEffect } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  console.log("Render")

  useEffect(() => {
    console.log("Hi")
  }, [])

  useEffect(() => {
    const handleEvent = () => {
      console.log(`My name is ${name} and I am ${age} years old`)
    }
    document.addEventListener("click", handleEvent)
    return () => {
      document.removeEventListener("click", handleEvent)
      console.log("Bye")
    }
  }, [name, age])

  useEffect(() => {
    document.title = name
  }, [name])

  useEffect(() => {
    const handleEvent = () => {
      function sayName() {
        console.log(name)
      }

      setTimeout(sayName, 1000,)
    }
    document.addEventListener("click", handleEvent)

    return () => {
      document.removeEventListener("click", handleEvent)
    }
  }, [name])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
