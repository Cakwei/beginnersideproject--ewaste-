import { useState } from "react";
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx'
import Contact from '../pages/Contact.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/beginnersideproject--ewaste-" element={<Home />} />
      <Route path="/beginnersideproject--ewaste-/login" element={<Login />} />
      <Route path="/beginnersideproject--ewaste-/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
