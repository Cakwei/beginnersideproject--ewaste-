import { useState, useEffect } from "react";
import Header from "../components/header.jsx";
export default function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} grid h-dvh w-dvw min-w-[250px] grid-cols-1 grid-rows-[65px_1fr_75px] overflow-scroll text-black`}
    >
      <title>Account Sign In</title>
      <Header toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
