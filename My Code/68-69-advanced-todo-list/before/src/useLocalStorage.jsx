import { useState, useEffect } from "react";


export function useLocalStorage(todos){
    useEffect(()=>{
        // localStorage.setItem()
    },[todos])

    return todos
}