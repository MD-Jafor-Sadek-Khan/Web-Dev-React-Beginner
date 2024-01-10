import { useEffect, useCallback, useState, useMemo } from "react"

export function useLocalStorage(key, initValue) {
  const nameLocal = useMemo(() => {
    return localStorage.getItem(key) !== "null" &&
      localStorage.getItem(key) !== "undefined"
      ? JSON.parse(localStorage.getItem(key))
      : ""
  }, [])

  const [value, setvalue] = useState(nameLocal ? nameLocal : initValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))

    return () => {
      localStorage.removeItem(key)
    }
  }, [value])

  return [value, setvalue]
}
