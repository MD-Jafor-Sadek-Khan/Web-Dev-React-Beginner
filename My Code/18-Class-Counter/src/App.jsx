import React from "react"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    const handleClick = () => {
      this.setState((prev) => {
        return {
          counter: prev.counter + 1,
        }
      })
    }

    return (
      <>
    
      <h1>{this.state.counter}</h1>
      <button onClick={handleClick}>Click to Incriment</button>
      </>
    )

  }
}
