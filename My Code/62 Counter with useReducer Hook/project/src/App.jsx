import { useReducer } from "react"

const ACTIONS = {
  Decrement: "Decrement",
  Incriment: "Incriment",
  Reset: "Reset",
  AddBy5: "AddBy5",
  SubstractBy5: "SubstractBy5",
}

function kala(count, action) {
  if (action.type === ACTIONS.Decrement) {
    return count - 1
  } else if (action.type === ACTIONS.Incriment) {
    return count + 1
  } 
  else if (action.type === ACTIONS.Reset) {
    return 0
  } 
  else if (action.type === ACTIONS.SubstractBy5) {
    return count - action.payload.value
  } 
  else if (action.type === ACTIONS.AddBy5) {
    return count + action.payload.value
  } 
  else {
    return count
  }
}

function App() {
  const [count, dispatch] = useReducer(kala, 0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
      }}
    >
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.SubstractBy5, payload:{value:5} })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.Decrement })}>-</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        {count}
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button onClick={() => dispatch({ type: ACTIONS.Incriment })}>+</button>
        <button onClick={() => dispatch({ type: ACTIONS.AddBy5, payload:{value: 5} })}>+5</button>
      </div>
      <button onClick={() => dispatch({ type: ACTIONS.Reset })}>Reset</button>
    </div>
  )
}

export default App
