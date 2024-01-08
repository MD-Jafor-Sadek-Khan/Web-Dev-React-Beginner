import React, { useState, useEffect } from "react"
import User from "./Users"


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    setError(undefined)
    const controller =new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {signal:controller.signal})
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        if(error?.name === "AbortError" ) return
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })


      return ()=>{
        controller.abort()
      }
  }, [])

  return (
    <>
      <h1>User List</h1>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <ul>
            {data.map((item) => {
              return <li key={item.id}><User name={item.name}/></li>
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
