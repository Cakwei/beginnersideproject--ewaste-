import { useState } from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Contact from "../pages/Contact.jsx";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
