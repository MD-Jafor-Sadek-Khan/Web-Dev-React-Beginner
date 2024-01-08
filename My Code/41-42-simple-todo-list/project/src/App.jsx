import { useState } from "react"
import Todo from "./Todo"

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
        todo.id === id ? { ...todo, checked: !todo.checked } : {...todo}
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
      <h2>New Todo</h2>
      <input
        type="text"
        name="todo"
        id="todo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <br />
      <button onClick={input ? handleAdd : () => {}}>Add Todo Item</button>
    </>
  )
}
export default App
