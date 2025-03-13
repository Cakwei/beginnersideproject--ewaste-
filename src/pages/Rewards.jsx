import "../styles/Rewards.css";
import Header from "../components/header";
import { useState } from "react";
import { getDefaultMode } from "../constants";
import { useEffect } from "react";
export default function Rewards() {
  const [isDarkMode, setIsDarkMode] = useState(getDefaultMode());


  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    localStorage.setItem("enableDarkMode", isDarkMode), [isDarkMode];
  });

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} grid h-dvh w-dvw grid-cols-1 grid-rows-[65px_1fr_200px] overflow-scroll`}
    >
      <Header toggleDarkMode = {toggleDarkMode}/>
    </div>
  );
}
