import React from "react"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: 0,
    }
  }

  render() {
    const handleName = (event) => {
      this.setState({ name: event.target.value })
    }

    const handleAge = (event) => {
      this.setState({ age: event.target.value })
    }

    const handleAddAge = () => {
      this.setState((prev) => {
        return { age: prev.age + 1 }
      })
    }
    const handleSubstractAge = () => {
      this.setState((prev) => {
        return { age: prev.age - 1 }
      })
    }
    return (
      <>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={handleName}
        />
        <div>
          <button onClick={handleAddAge}>+</button>
          <input
            type="number"
            name="age"
            id="age"
            value={this.state.age}
            onChange={handleAge}
          />
          <button onClick={handleSubstractAge}>-</button>
        </div>
        <div>
          My name is {this.state.name} and my Age is {this.state.age}
        </div>
      </>
    )
  }
}
