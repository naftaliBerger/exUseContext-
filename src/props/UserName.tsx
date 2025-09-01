import { useContext } from "react";
import { UserContext } from "../App";

export default function UserName() {
  const name = useContext(UserContext);
  return (
    <div>
      <h3>User Name</h3>
      <p>{name}</p>
    </div>
  );
}
