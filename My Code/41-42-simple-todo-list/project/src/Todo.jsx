import React from "react"
import "../styles.css"

export default function Todo({ name, checked, handleCheck, handleDelete }) {
  console.log(checked)
  return (
    <li
      style={{
        fontFamily: "cursive",
        listStyleType: "none",
        padding: "0",
        margin: "0",
      }}
    >
      <input
        style={{ margin: "5px" }}
        type="checkbox"
        name="done"
        id="done"
        checked={checked}
        onChange={handleCheck}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {name}
      </span>
      <button
        style={{
          margin: "5px",
          backgroundColor: "red",
          border: "0",
          padding: "5px 10px",
          color: "white",
          borderRadius: "15px",
          fontWeight: "bold",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  )
}
