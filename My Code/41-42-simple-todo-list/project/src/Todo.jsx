import React from "react"

export default function Todo({ name, checked, handleCheck, handleDelete }) {
  console.log(checked)
  return (
    <li style={{listStyleType:"none",padding:"0",margin:"0"}}>
      <input
        style={{margin:"5px"}}
        type="checkbox"
        name="done"
        id="done"
        checked={checked}
        onChange={handleCheck}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {name}
      </span>
      <button style={{margin:"5px"}} onClick={handleDelete}>Delete</button>
    </li>
  )
}
