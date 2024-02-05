import { useEffect } from "react";
import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accolades from "./pages/Accolades"; 
import Artists from "./pages/Artists";
import About from "./pages/About";
import Doremipa from "./pages/Doremipa";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-spotlight" element={<Artists />} />
        <Route path="/events-performances" element={<Events />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/doremipa" element={<Doremipa />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
