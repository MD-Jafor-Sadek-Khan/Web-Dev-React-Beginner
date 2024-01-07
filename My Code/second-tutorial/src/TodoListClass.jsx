import React from "react"

export class TodoListClass extends React.Component {
  render(){
    return(
      <div>
        <input type="checkbox" defaultChecked={this.props.isComplete}/>
        {this.props.children}
      </div>
    )
  }
}
