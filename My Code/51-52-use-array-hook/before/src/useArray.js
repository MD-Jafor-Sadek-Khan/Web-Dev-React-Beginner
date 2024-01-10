import { useState, useEffect, useCallback } from "react"

export function useArray(initial = []) {
  const [array, set] = useState(initial)

  const push = useCallback( (value) => {
    set((prev) => {
      return [...prev, value]
    })
  },[])

  const replace = useCallback((index, newValue) => {
    set((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)]
    })
  },[])

  const filter = useCallback((fun) => {
    console.log(fun)
    set(prev => {
        let newArr = []
        prev.forEach(item =>{
            if(fun(item))
            {
                newArr.push(item)
            }
        })
        return newArr
    })

  },[])

  const remove = useCallback((index) =>{
    set(prev =>{
        return [...prev.slice(0,index),...prev.slice(index+1)]
    })
  },[])

  const clear = useCallback(()=>{
    set([])
  },[])
  
  const reset = useCallback(()=>{
    set(initial)
  },[initial])

  return { array, set, push, replace, filter, remove, clear, reset }
}

