import { useEffect, useReducer } from "react"

const ACTIONS = {
  FETCH_START : "FETCH_START",
  FETCH_SUCCESS : "FETCH_SUCCESS",
  FETCH_ERROR : "FETCH_ERROR",
}

function reducer(state, {type, payload}){
  if(type === ACTIONS.FETCH_START){
    return {
      isError:false,
      isLoading:true,
    }
  }
  else if(type === ACTIONS.FETCH_SUCCESS){
    return {

      isError:false,
      isLoading:false,
      data: payload
    }
  }
  else if(type === ACTIONS.FETCH_ERROR){
    return {

      isError:true,
      isLoading:false,
    }
  }
}

export function useFetch(url, options = {}) {


  const [state, dispatch ]= useReducer(reducer, {isLoading:true, isError:false})


  useEffect(() => {

    dispatch({type:ACTIONS.FETCH_START})

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((data)=>{
        dispatch({type:ACTIONS.FETCH_SUCCESS, payload:{data}})
      })
      .catch(e => {
        if (e.name === "AbortError") return

        dispatch({type:ACTIONS.FETCH_ERROR})
      })


    return () => {
      controller.abort()
    }
  }, [url])

  return state
}
