import { createContext } from "react";
import UserProfile from "./props/UserProfile";

// יוצרים Context כאן ונייצא אותו כדי שישתמשו בו בקבצים אחרים
export const UserContext = createContext<string>("");

export default function App() {
  const userName = "Alice";

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h1>App Component</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}
