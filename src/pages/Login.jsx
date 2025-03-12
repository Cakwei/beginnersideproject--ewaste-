import { useEffect, useState } from "react";
import "../styles/Login.css";
import { getDefaultMode } from "../constants";
import reactIcon from "../assets/react.svg";
import { NavLink } from "react-router";
import axios from "axios";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(getDefaultMode());
  const [showState, setShowState] = useState("password");
  const url = "http://localhost:8080/post";

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await axios.get(url, 'fwef');
      console.log('s' + res.data);
    } catch (err) {
      console.log("error" + err);
    }
  }
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    localStorage.setItem("enableDarkMode", isDarkMode), [isDarkMode];
  });
  function togglePassShow() {
    setShowState(showState === "password" ? "text" : "password");
  }
  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} flex h-dvh w-dvw justify-center overflow-scroll bg-green-400 pt-25 text-black dark:bg-neutral-800 dark:text-white`}
    >
      <title>Log In</title>
      <div className="absolute top-0">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onClick={toggleDarkMode}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="relative flex h-[500px] w-[min(80%,500px)] min-w-[150px] flex-col items-center gap-[35px] bg-white pt-12 text-black shadow-2xl drop-shadow-2xl dark:bg-white dark:text-white"
      >
        <NavLink
          to="/"
          className="bi bi-box-arrow-in-left absolute top-1.5 left-2.5 flex cursor-pointer items-center text-3xl hover:scale-[1.1]"
        ></NavLink>
        <img className="w-[65px]" src={reactIcon} />
        <div
          id="username-container"
          className="flex w-[100%] justify-center text-white"
        >
          <label className="input validator w-[min(100%,250px)]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              required
              onChange={(e) => {
                setName(e.target.value), showState ? "text" : "password";
              }}
              value={name}
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </label>
        </div>
        <div id="password-container" className="w-[min(100%,250px)] text-white">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              id="password"
              type={showState}
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Password"
              value={pass}
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <div className="mt-2 flex items-center gap-x-1 text-xs text-black">
            <input type="checkbox" onClick={togglePassShow}></input>
            <label>Remember me</label>
          </div>
        </div>
        <button className="btn btn-success w-[150px]" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
