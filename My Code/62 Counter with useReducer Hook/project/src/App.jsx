import { useReducer } from "react"

function reducer(count, action){

  if(action.type === "Decrement"){
    return count - 1
  }

  else if(action.type === "Incriment"){
    return count + 1
  }
  else{
    return count
  }


}


function App() {
  const [count, dispatch] = useReducer(reducer, 0)


  return (
    <>
      <div>
        <button onClick={()=>dispatch({type:"Decrement"})}>+</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        {count}
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button onClick={()=>dispatch({type:"Incriment"})}>-</button>
      </div>
    </>
  )
}

export default App
