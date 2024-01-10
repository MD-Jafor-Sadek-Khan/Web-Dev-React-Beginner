import { useState, useEffect } from "react"

export function useArray(initial = []) {
  const [array, set] = useState(initial)

  const push = (value) => {
    set((prev) => {
      return [...prev, value]
    })
  }

  const replace = (index, newValue) => {
    set((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)]
    })
  }

  const filter = (fun) => {
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

  }

  const remove = (index) =>{
    set(prev =>{
        return [...prev.slice(0,index),...prev.slice(index+1)]
    })
  }

  const clear = ()=>{
    set([])
  }
  
  const reset = ()=>{
    set(initial)
  }

  return { array, set, push, replace, filter, remove, clear, reset }
}

