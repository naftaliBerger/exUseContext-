import { useContext } from "react"
import { UserContext } from "../App"
export default function UserGreeting() {
    const userName = useContext(UserContext)
  return (
    <p>hello {userName}</p>
  )
}
