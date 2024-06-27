import "./App.css";

// config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx";

//pages
import Home from "./pages/Home.jsx";
import Products from "./pages/Products";
import About from "./pages/About";


function App() {
  return (
    <>
      <h1>ContextAPI</h1>

      <BrowserRouter>

      <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
