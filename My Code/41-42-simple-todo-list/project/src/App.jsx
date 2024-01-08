import { useState } from "react"
import Todo from "./Todo"
import "../styles.css"

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [checked, setChecked] = useState(false)
  const [id, setId] = useState(0)

  const handleAdd = () => {
    setId((prev) => prev + 1)
    setTodos((prev) => {
      const todo = { id: id, name: input, checked: false }
      return [...prev, todo]
    })
    setInput("")
  }

  const handleCheck = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      )
    })
  }

  const handleDelete = (id) => {
    setTodos((prevs) => prevs.filter((prev) => prev.id !== id))
  }

  console.log(todos)
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            handleCheck={() => handleCheck(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
          />
        )
      })}
      <h2 style={{ fontFamily: "cursive" }}>New Todo</h2>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "40%",
          justifyContent: "center",
        }}
      >
        <input
          style={{ padding: "3px" }}
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <br />
        <button
          style={{
            position: "relative",
            top: "-14px",
            padding: "8px 5px",
            backgroundColor: "#6B36FF",
            border: "0",
            borderRadius: "5px",
          }}
          onClick={input ? handleAdd : () => {}}
        >
          <span style={{ fontWeight: "900", color: "white" }}>
            Add Todo Item
          </span>
        </button>
      </div>
    </>
  )
}
export default App
