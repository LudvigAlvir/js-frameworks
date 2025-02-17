import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Test } from "./routes/Test.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/test", element: <Test /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
