import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Article from "../components/article.jsx";
import Footer from "../components/footer.jsx";
import "../styles/Home.css";
import { getDefaultMode } from "../constants/index.js";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(getDefaultMode());

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    localStorage.setItem("enableDarkMode", isDarkMode), [isDarkMode];
  });

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} grid h-dvh w-dvw min-w-[250px] grid-cols-1 grid-rows-[65px_1fr_200px] overflow-scroll`}
    >
      <Header toggleDarkMode={toggleDarkMode} />
      <Article />
      <Footer />
    </div>
  );
}
