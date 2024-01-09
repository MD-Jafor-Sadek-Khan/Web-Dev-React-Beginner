import { useEffect, useState } from "react"

export function useFetch(initial, OPTIONS) {
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState()
  const [isError, setIsError] = useState()

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    const controller = new AbortController()

    fetch(initial, {
      method: OPTIONS.method,
      headers: OPTIONS.headers,
      body: OPTIONS.body,
      signal: controller.signal
    })
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error?.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => setIsLoading(false))

    return () => {
      controller.abort()
    }
  }, [initial])

  return { data, isLoading, isError }
}
