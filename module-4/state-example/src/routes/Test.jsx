import { useStore } from "../store";
import { Link } from "react-router-dom";
export function Test() {
  const { name } = useStore();
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Hello {name}</h1>
    </div>
  );
}
