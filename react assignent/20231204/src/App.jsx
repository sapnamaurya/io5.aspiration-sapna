import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/index.jsx";
import SignUp from "./Pages/SignUp/index.jsx";
import Contact from "./Pages/Contact/index.jsx";
import Product from "./Pages/Product/index.jsx";
import Home from "./Pages/Home/index.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home-Page" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
