import { useStore } from "./store";
import { Link } from "react-router-dom";
function App() {
  /* const [todos, setTodos] = useState([
    { id: 1, text: "Wake up" },
    { id: 2, text: "Shower" },
  ]); */
  const { todos, setTodos } = useStore();

  return (
    <>
      <Link to="/edit" className="text-blue-600">
        Edit
      </Link>
      <h1 className="text-amber-500">Todos</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(document.querySelector("#todo-input").value);
          const inputText = document.querySelector("#todo-input").value;

          setTodos([
            ...todos,
            {
              id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              text: inputText,
            },
          ]);
          console.log(todos);
        }}
      >
        <label htmlFor="todo-input">Todo item</label>
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          className="border block"
        />
        <button type="submit" className="border rounded p-1">
          Add
        </button>
      </form>
      <div className="this will be our container for todo items">
        {todos.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </>
  );
}

export default App;
