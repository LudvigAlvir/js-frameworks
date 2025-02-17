import { useStore } from "./store";
import { Link } from "react-router-dom";

function App() {
  const { count, increment, setCount, name, setName } = useStore();
  return (
    <>
      <Link to={"/test"}>Test lin</Link>
      <button onClick={() => increment()}>{count}</button>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
      />
      <h2>{name}</h2>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}

export default App;
