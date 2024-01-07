import { useState, useEffect } from "react"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  useEffect(() => {
    const handler = () => {
      console.log(name)
    }

    document.addEventListener("click", handler)

    return () => {
      document.removeEventListener("click", handler)
    }
  }, [name])
  function handleName(event) {
    setName(event.target.value)
  }

  function handleAge(event) {
    setAge(event.target.value)
  }

  function handleAddAge() {
    setAge((prev) => {
      return prev + 1
    })
  }

  function handleSubstractAge() {
    setAge((prev) => {
      return prev - 1
    })
  }

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleName}
      />
      <div>
        <button onClick={handleAddAge}>+</button>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleAge}
        />
        <button onClick={handleSubstractAge}>-</button>
      </div>
      <div>
        My name is {name} and my Age is {age}
      </div>
    </>
  )
}

export default App
