import { Link, Outlet } from "react-router-dom";
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </nav>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
