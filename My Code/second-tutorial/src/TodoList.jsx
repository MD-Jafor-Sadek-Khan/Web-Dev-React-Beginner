import React from "react"

export function TodoList({ children, isComplete }) {
  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={isComplete} />
        {children}
      </label>
    </div>
  )
}
