import { createContext } from "react";
import UserProfile from "./props/UserProfile";
import UserGreeting from "./props/UserGreeting";
export const UserContext = createContext<string>("");

export default function App() {
  const userName = "naftali";

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h1>App Component</h1>
        <UserProfile />
        <UserGreeting />
      </div>
    </UserContext.Provider>
  );
}
