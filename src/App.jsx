import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Elements from "./Component/Elements";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
