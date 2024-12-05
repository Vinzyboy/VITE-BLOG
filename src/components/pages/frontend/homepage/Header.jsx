import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-5 border-b border-light">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">FYLLA</Link>
          <div className="flex justify-between items-center gap-5">
            <ul className="flex justify-between gap-10 text-sm uppercase">
              <li>
                <NavLink to="/">Service</NavLink>
              </li>
              <li>
                <NavLink to="/">Work</NavLink>
              </li>
              <li>
                <NavLink to="/">Studio</NavLink>
              </li>
              <li>
                <NavLink to="/">Cart</NavLink>
              </li>
            </ul>
            <button className="btn-animate" data-text="Let's Talk">
              Let's Talk
            </button>
            <ul className="flex items-center gap-5 pl-5 border-l border-line">
              <li>
                <a
                  href="#"
                  className="size-[30px] text-xs  border border-light block center-all rounded-full
                     hover:bg-black hover:text-white transition-all duration-100"
                >
                  TW
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="size-[30px] text-xs  border border-light block center-all rounded-full
                     hover:bg-black hover:text-white transition-all duration-100"
                >
                  IN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="size-[30px] text-xs  border border-light block center-all rounded-full
                     hover:bg-black hover:text-white transition-all duration-100"
                >
                  BE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
