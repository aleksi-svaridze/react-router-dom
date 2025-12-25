import { Link, Outlet } from "react-router-dom";
import { LogoSvg } from "../assets/svgs";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function LinkLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="">
      <header className="bg-white mx-4">
        <div className="container mx-auto flex items-center justify-between border-b py-5">
          <Link to="/">
            <LogoSvg color="text-red-500" />
          </Link>
          <nav className="hidden md:flex items-center gap-x-5 font-semibold ">
            <Link to="/">მთავარი გვერდი</Link>
            <Link to="/about">საინტერესო ფაქტები</Link>
          </nav>
          <CiMenuFries
            className="text-3xl"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />

          <div
            style={{ right: `${isOpen ? "0px" : "-100%"}` }}
            className={`fixed  top-17.5 bottom-0 bg-black/95 w-full transition-all`}
          >
            <nav className="text-white flex flex-col p-5 pt-7 gap-y-5 text-center">
              <Link to="/">მთავარი გვერდი</Link>
              <Link to="/about">საინტერესო ფაქტები</Link>
              <hr className="mt-7" />
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </main>
  );
}

export default LinkLayout;
