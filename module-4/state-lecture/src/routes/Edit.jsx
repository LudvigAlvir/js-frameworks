import { Link } from "react-router-dom";
import { useStore } from "../store";
export function Edit() {
  const { todos, removeTodo } = useStore();
  return (
    <>
      <Link to="/" className="text-blue-600">
        Home
      </Link>
      <h1>Edit page</h1>

      {todos.map((item) => (
        <div key={item.id} className="flex gap-2">
          <p>{item.text}</p>
          <button
            className="border-red-500 border"
            onClick={() => {
              console.log(item.id);
              removeTodo(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
