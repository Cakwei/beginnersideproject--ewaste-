import "../styles/header.css";
import { useState } from "react";
import { NavLink } from "react-router";
import { navLinks } from "../constants";
import reactImg from "../assets/react.svg";
export default function Header({ toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState("translate-x-[-275px]");
  const toggleSideMenu = () => {
    if (isMenuOpen === "translate-x-[-275px]") {
      setIsMenuOpen("translate-x-[0px]");
      document.getElementById("bgtest").style.visibility = "visible";
    } else {
      setIsMenuOpen("translate-x-[-275px]");
      document.getElementById("bgtest").style.visibility = "hidden";
    }
  };
  return (
    <>
      <header
        id="top"
        className="top z-1 sticky top-0 col-start-1 col-end-2 row-start-1 row-end-2 min-w-[250px] flex h-full items-center justify-between bg-white shadow dark:bg-black"
      >
        <svg
          id="hamburger-menu"
          className="hamburger-menu ml-[15px] text-black flex h-[32px] w-[32px] min-w-[32px] cursor-pointer justify-between transition-transform hover:scale-[1.15] dark:text-white"
          width="0"
          height="0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSideMenu}
        >
          <path d="M4 4H8V8H4V4Z" fill="currentColor" />
          <path d="M4 10H8V14H4V10Z" fill="currentColor" />
          <path d="M8 16H4V20H8V16Z" fill="currentColor" />
          <path d="M10 4H14V8H10V4Z" fill="currentColor" />
          <path d="M14 10H10V14H14V10Z" fill="currentColor" />
          <path d="M10 16H14V20H10V16Z" fill="currentColor" />
          <path d="M20 4H16V8H20V4Z" fill="currentColor" />
          <path d="M16 10H20V14H16V10Z" fill="currentColor" />
          <path d="M20 16H16V20H20V16Z" fill="currentColor" />
        </svg>

        <div className="right-nav-icon mr-[15px] flex cursor-pointer items-center justify-center gap-x-[15px]">
        <i class="bi bi-moon text-black dark:text-white text-[22px]" onClick={toggleDarkMode} ></i>
          <NavLink
            to="/login"
            className="account-btn-desktop hidden sm:flex btn rounded-xl hover:scale-[1.01]"
          >
            <div>Login/Register</div>
          </NavLink>
          <NavLink
            to="/login"
            className="bi bi-person text-[27px] account-btn-mobile cursor-pointer sm:hidden text-black transition-transform hover:scale-[1.15] md:hidden dark:text-white"
          >
          </NavLink>
        </div>
        <nav
          id="menu"
          className={`absolute z-1 top-0 h-[100vh] w-[250px] ${isMenuOpen} rounded-tr-xl rounded-br-xl bg-white`}
        >
          <i
            id="close-menu-btn"
            className="bi bi-arrow-left close-menu-btn absolute top-[12px] left-[230px] flex cursor-pointer items-center justify-center rounded-4xl bg-black p-[5px] text-2xl text-white"
            onClick={toggleSideMenu}
          ></i>

          <div className="relative flex flex-col items-center">
            <div className="flex h-[75px] w-full flex-col items-center justify-center gap-3">
              <img src={reactImg} />
              <hr className="w-[85%] border-neutral-300" />
            </div>
            {navLinks.map((item) => (
              <a
                className="flex items-center font-semibold text-neutral-500"
                id={item.label}
                key={item.label}
                href={item.href}
              >
                <i className={`${item.var} mr-[15px] text-2xl`} />
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <p
        id="bgtest"
        className="invisible top-0 absolute h-dvh w-dvw bg-black opacity-50"
        onClick={toggleSideMenu}
      ></p>
      </header>
      
    </>
  );
}
