import "./header.css";
import { useState } from "react";
import { navLinks } from "../../constants";
function Header({ toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState("translate-x-[-250px]");
  const toggleSideMenu = () => {
    if (isMenuOpen === "translate-x-[-250px]") {
      setIsMenuOpen("translate-x-[0px]");
      document.getElementById("bgtest").style.visibility = "visible";
    } else {
      setIsMenuOpen("translate-x-[-250px]");
      document.getElementById("bgtest").style.visibility = "hidden";
    }
  };
  return (
    <>
      <header
        id="top"
        className="top col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full items-center justify-between shadow dark:bg-black"
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
          className={`absolute top-0 z-[2] h-[100vh] w-[250px] ${isMenuOpen} overflow-x-hidden rounded-tr-xl rounded-br-xl bg-neutral-100`}
        >
          <div className="relative flex flex-col items-center">
            {navLinks.map((item) => (
              <a className="font-semibold" key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <svg
              className="close-menu-btn absolute top-[10px] right-[10px] cursor-pointer text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleSideMenu}
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </nav>
      </header>
      <p
        id="bgtest"
        className="invisible absolute h-dvh w-dvw bg-black opacity-80"
      ></p>
    </>
  );
}

export default Header;
