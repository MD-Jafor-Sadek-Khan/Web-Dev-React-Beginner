import user from "../user.json"
import "../user.css"
import { UserCard } from "./UserCard"
import { UserCardClass } from "./UserCardClass"
import { Counter } from "./Counter"

function App() {
  return (
    <div>
      <UserCard
        name={user[0].name}
        phoneNumber={user[0].phoneNumber}
        age={user[0].age}
        address={user[0].address}
      />
      <br />
      <UserCardClass
        name={user[1].name}
        phoneNumber={user[1].phoneNumber}
        age={user[1].age}
        address={user[1].address}
      />
      <br />
      
      <h1><Counter/></h1>
    </div>
  )
}

export default App
