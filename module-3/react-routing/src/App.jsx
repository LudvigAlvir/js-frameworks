import { useState } from "react";
import "./App.css";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  return (
    <>
      <header>
        <a
          href="/"
          className="text-blue-500 mx-4"
          onClick={(e) => {
            e.preventDefault();

            setRoute("/");
          }}
        >
          Home
        </a>
        <a
          href="/about"
          className="text-blue-500 mx-4"
          onClick={(e) => {
            e.preventDefault();

            setRoute("/about");
          }}
        >
          About
        </a>
      </header>

      {route == "/" ? <h1 className="text-3xl font-bold">Home page</h1> : ""}

      {route == "/about" ? (
        <h1 className="text-3xl font-bold">About page</h1>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
