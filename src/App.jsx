import { Button } from "flowbite-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallary";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button color="success">Click me</Button> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
