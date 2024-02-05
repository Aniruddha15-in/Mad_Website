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
