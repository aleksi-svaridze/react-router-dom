import { Link, Outlet } from "react-router-dom";

function LinkLayout() {
  return (
    <main className="">
      <header className="bg-white ">
        <div className="container mx-auto flex items-center justify-between border-b py-5">
          <Link to="/">LOGO</Link>
          <nav className="flex items-center gap-x-5">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </main>
  );
}

export default LinkLayout;
