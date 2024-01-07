import React from "react"

function App() {
  const [array, setArray] = React.useState(() => {
    return ["A", "B", "C"]
  })
  const [value, setValue] = React.useState("")
  const [index, setIndex] = React.useState(0)
  function handleRemoveFirstElement() {
    setArray((prev) => {
      const newArr = []
      prev.map((pre, index) => {
        if (index !== 0) {
          newArr.push(pre)
        }
      })

      return newArr
    })
  }

  const handleInput = (event) => {
    setValue(event.target.value)
  }
  const handleIndex = (event) => {
    setIndex(event.target.value)
  }

  const handleRemoveSpecificElement = () => {
    setArray((prevs) => {
      return prevs.filter((prev) => {
        return prev !== value
      })
    })
  }
  const handleAddElementAtFirst = () => {
    setArray((prevs) => {
      const newArr = []
      prevs.map((prev, index) => {
        newArr.push(prev)
      })
      newArr.unshift(value)
      return newArr
    })
  }
  const handleAddElementAtEnd = () => {
    setArray((prevs) => {
      const newArr = []
      prevs.map((prev, index) => {
        newArr.push(prev)
      })
      newArr.push(value)
      return newArr
    })
  }
  const handleRemoveAllElement = () => {
    setArray([])
  }
  const handleResetAllElement = () => {
    setArray(() => {
      return ["A", "B", "C"]
    })
  }
  const handleAddElementAtGivenIndex = () => {
    setArray((prevs) => {
      const newArr = []
      for (let i = 0; i < prevs.length; i++) {
        if (i === parseInt(index)) {
          newArr.push(value)
          newArr.push(prevs[i])
        } else {
          newArr.push(prevs[i])
        }
      }
      console.log(newArr)
      return newArr
    })
  }

  return (
    <>
      <h1>
        {array.map((item) => {
          return <p style={{ display: "inline" }}>{item},</p>
        })}
      </h1>
      <input style={{ visibility: "hidden" }} />
      <button onClick={handleRemoveFirstElement}>Remove First Element</button>
      <br />
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={handleRemoveSpecificElement}>
        Remove Specific Element
      </button>
      <br />
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={handleAddElementAtFirst}>Add Element At First</button>
      <br />
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={handleAddElementAtEnd}>Add Element At End</button>
      <br />
      <input style={{ visibility: "hidden" }} />
      <button onClick={handleRemoveAllElement}>Remove All Element</button>
      <br />
      <input style={{ visibility: "hidden" }} />
      <button onClick={handleResetAllElement}>Reset All Element</button>
      <br />
      Value
      <input type="text" value={value} onChange={handleInput} />
      Index
      <input type="number" value={index} onChange={handleIndex} />
      <button onClick={handleAddElementAtGivenIndex}>
        Add Element At Given Index
      </button>
    </>
  )
}

export default App
 