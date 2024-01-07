import React from "react";

export function Counter () {
    const [counter, setCounter] = React.useState(0)

    function incriment(){
        setCounter(prev =>{
            return prev + 1
        })
    }

    return (
        <h5 onClick={incriment}>{counter}</h5>
    )
}