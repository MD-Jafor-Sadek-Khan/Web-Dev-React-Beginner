import { useEffect, useState, createContext } from "react"
import { Child } from "./Child"

export const ThemeContext = createContext()

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme() {
    setIsDarkMode((d) => !d)
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white"
    document.body.style.color = isDarkMode ? "white" : "#333"
  }, [isDarkMode])

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Child />
      </ThemeContext.Provider>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident id
        aliquam ea nesciunt qui ipsum. Magni iusto repellendus ut unde?
      </p>
    </>
  )
}
