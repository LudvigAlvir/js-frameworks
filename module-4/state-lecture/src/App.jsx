import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wake up" },
    { id: 2, text: "Shower" },
  ]);
  return (
    <>
      <h1 className="text-amber-500">Todos</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(document.querySelector("#todo-input").value);
          const value = document.querySelector("#todo-input").value;
          setTodos([
            ...todos,
            {
              id: todos[todos.length - 1].id + 1,
              text: value,
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
