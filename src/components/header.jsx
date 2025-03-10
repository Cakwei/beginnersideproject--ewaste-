import "./header.css";
import { useState } from "react";
import { navLinks } from "../constants";
import reactImg from "../assets/react.svg";
import { doc } from "prettier";
function Header({ toggleDarkMode }) {
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
        className="top sticky top-0 z-1 col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full items-center justify-between bg-white shadow dark:bg-black"
      >
        <svg
          id="hamburger-menu"
          className="hamburger-menu ml-[15px] flex h-[32px] min-h-[32px] w-[32px] min-w-[32px] cursor-pointer justify-between transition-transform hover:scale-[1.15] dark:text-white"
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

        <div className="right-nav-icon mr-[15px] flex cursor-pointer content-center gap-x-[15px]">
          <svg
            onClick={toggleDarkMode}
            id="moon-icon"
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            width="0"
            height="0"
            fill="currentColor"
            className="bi bi-moon h-[22px] w-[22px] cursor-pointer self-center text-black hover:scale-[1.15] dark:text-white"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
          </svg>
          <button
            onClick={() => {
              window.location.href = "login.html";
            }}
            className="account-btn-desktop relative hidden cursor-pointer self-center bg-green-500 pt-[8px] pr-[10px] pb-[8px] pl-[10px] text-base font-semibold text-white md:block dark:text-black"
          >
            <div>Login/Register</div>
          </button>
          <button
            onClick={() => {
              window.location.href = "login.html";
            }}
            className="account-btn-mobile cursor-pointer text-black transition-transform hover:scale-[1.15] md:hidden dark:text-white"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                  fill="currentColor"
                />
                <path
                  d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
        <nav
          id="menu"
          className={`absolute z-3 top-0 h-[100vh] w-[250px] ${isMenuOpen} rounded-tr-xl rounded-br-xl bg-white`}
        >
          <i
            id="close-menu-btn"
            className="bi bi-arrow-left close-menu-btn absolute top-[12px] left-[230px] z-[10] flex cursor-pointer items-center justify-center rounded-4xl bg-black p-[5px] text-2xl text-white"
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
        className="invisible z-[2] top-0 absolute h-dvh w-dvw bg-black opacity-50"
        onClick={toggleSideMenu}
      ></p>
      </header>
      
    </>
  );
}

export default Header;
