import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { useEffect, useState } from "react";
import Elements from "./Component/Elements";
import Products from "./Component/Products";
import About from "./Component/About";

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
