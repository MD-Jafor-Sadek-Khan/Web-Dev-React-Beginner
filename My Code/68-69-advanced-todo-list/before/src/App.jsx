import { useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"

const COMMAND_LIST = {
  ADD_NEW_TODO: "ADD_NEW_TODO",
  TOGGLE_TODO:"TOGGLE_TODO",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case COMMAND_LIST.ADD_NEW_TODO:
      if (payload.newTodoName === "") return

      const newArr = [
        ...state,
        { name: payload.newTodoName, completed: false, id: crypto.randomUUID() },
      ]
      payload.setNewTodoName("")
      return newArr

    case COMMAND_LIST.TOGGLE_TODO:
      
  }
}

function App() {
  const [todosR, dispatch] = useReducer(reducer, [])

  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTodo() {
    dispatch({
      type: COMMAND_LIST.ADD_NEW_TODO,
      payload: { newTodoName: newTodoName, setNewTodoName: setNewTodoName },
    })
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed }

        return todo
      })
    })
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <>
      <ul id="list">
        {todosR.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
