import { useState } from "react";
import Header from "./header.jsx";
import Article from './article.jsx';
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`${isDarkMode ? "dark" : "light"} grid h-dvh w-dvw min-w-[250px] grid-cols-1 grid-rows-[65px_1fr_75px] overflow-scroll`}>
      <Header toggleDarkMode={toggleDarkMode}/>
      <Article />
    </div>
  );
}
