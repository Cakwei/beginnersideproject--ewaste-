import { useState } from "react";
import Header from "../components/header.jsx";
import Article from "../components/article.jsx";
import Footer from "../components/footer.jsx";
import '../styles/Home.css';
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
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
